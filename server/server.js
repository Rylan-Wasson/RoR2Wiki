require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET


mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('connected', function() {
  console.log("MongoDB connected.");
})
db.on('error', function(){
  console.log("Error connecting to MongoDB.")
})

const userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
});

const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  content: {type: String, required: true},
  comments: Array
});
const Post = mongoose.model("Post", postSchema);



app.post("/api/signup", async (req, res) => {
  console.log("Received signup POST request");
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

  // check that user does not exist already
  const userCheck1 = await User.findOne({ email: email });

  const userCheck2 = await User.findOne({ username: username });
  if(userCheck1 || userCheck2) {
    return res.status(400).json({error: 'User already exists'})
  }

  
  bcrypt.hash(password, 10, async (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Create a new user instance with the provided details and the hashed password.
    const newUser = new User({
        email: email,
        password: hashedPassword,
        username: username, 
    });

    // Save the new user instance to the database.
    await newUser.save();

    res.status(201).json({ message: "Signup successful." });
  });
});


app.post("/api/login", async (req, res) => {
    console.log("Received login POST request");
    
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({error: 'All fields are required.'});
    }
  
    try {
      const user = await User.findOne({email: email})

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      // Compare password with bcrypt
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) {
          return res.status(500).json({ message: "Error comparing password" });
        }

        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

      // generate jwt with email and username
      const token = jwt.sign({ 
          id: user.email,
          username: user.username, 
        }, 
          JWT_SECRET, 
        {
          expiresIn: "24h",
        }
      );
        
      res.status(200).json({ message: "Login successful", token, user: user });
      })
    } catch (error) {
      return res.status(500).json({ message: "Error finding user" });
    }  
  });


  // route for adding new post
  app.post("/api/posts", async (req, res) => {
    console.log("Received post POST request");
    const {title, content} = req.body;
    
    // added .trim() check for if they send whitespace comment - Henry
    if(!title || !content || !content.trim()) {
        return res.status(400).json({error: 'All fields are required.'});
    }

    // grab JWT from header
    const token = req.get('Authorization');

    if(token) {
      try {
        // decode token, fetch username from it
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const author = decodedToken.username;
        const post = new Post({
          title: title,
          author: author,
          content: content,
          comments: []
        });

        await post.save();

        res.status(201).json({ message: "Post added." });
      } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    } else {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
});

// TODO add the commenter's username to the comment
// route for adding comment to a post
app.post("/api/comments", async (req, res) => {
  console.log("Received comment POST request");
  const { comment, title } = req.body;

  // added .trim() check for if they send whitespace comment - Henry
  if (!title || !comment || !comment.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // grab JWT from header
  const token = req.get('Authorization');

  if(token){
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET)
      const author = decodedToken.username
      // search and attempt to update post
      const updatedPost = await Post.findOneAndUpdate(
        { title: title},
        { $push: { comments: {comment: comment, author: author}} },
        { new: true }
      );

      // check that post was found
      if (!updatedPost) {
        return res.status(401).json({ message: "Post not found" });
      }
      return res.status(200).json({ message: 'Comment added successfully', post: updatedPost });

    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
});

app.get('/api/news', (request, response) => {
  console.log("Received news GET request");
  const targetURL = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=632360&maxlength=498&feeds=steam_community_announcements`;
  fetch(targetURL)
  .then((response) => response.json())
  .then((data) => {
      response.status(201).json(data);
  })
  .catch((error) => {
      console.log(error);
      response.status(400).json({message: "Error fetching news"});
  })
});


app.get("/api/posts", async (req, res) => {
  console.log("Received post GET request");
  const posts = await Post.find({});
  res.status(200).json({ message: "Comments loading.",  posts: posts});
});

app.delete("/api/delete-user", async (req, res) => {
  console.log("Received user DELETE request");
  const token = req.get('Authorization')
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userEmail = decoded.id;
    console.log(userEmail);
    const deleteUser = await User.findOneAndDelete({ email: userEmail })
    if(deleteUser) {
      res.status(200).json({ message: 'User profile deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});