import Subheader from "../components/Subheader";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from "react-hot-toast";


// const commentsTest = [
//     "Test Comment",
//     "That sucks",
//     "Here's some tips"
// ]

// const postsTest = [
//     { title: "Need help beating the final boss", author:"NewGuy", content:"He's just so difficult to avoid and he always one-shots me, what can I do to get better at fighting him?", comments: commentsTest },
//     { title: "Need help beating the final boss", author:"NewGuy", content:"He's just so difficult to avoid and he always one-shots me, what can I do to get better at fighting him?", comments: commentsTest },
//     { title: "Need help beating the final boss", author:"NewGuy", content:"He's just so difficult to avoid and he always one-shots me, what can I do to get better at fighting him?", comments: commentsTest },
// ]

const formSchema = z.object({
    title: z.string().min(1, { message: "Must include title" }),
    content: z.string().min(1, { message: "Must include content" })
});

const CommunityPage = () => {
    const [selectedPost, setSelectedPost] = useState(-1);
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState(1);

    const token = localStorage.getItem('token')

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
      });

    const handleSelection = (index) => {
        setSelectedPost(index);
        setShowForm(false);
    }
    
    const handleOpenForm = () => {
        setShowForm(!showForm);
    }

    const updatePostComments = () => {
        setNewPost(newPost + 1);
    }


    useEffect(() => {
            // code to fetch posts from the database
        try {
            fetch("http://localhost:3000/api/posts", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
            },
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // set posts, update state var
                setPosts(data.posts);
            })
            .catch((error) => {
                (error.message || "An error occurred while getting comments");
            });
            }
            catch (err) {
                console.error(err);
            }

    }, [newPost])


    
    // needs to be called when new post is created by user
    const handleNewPost = data => {
  
        console.log('handle new post called');
        try {
            fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': token
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("New post created:", data);
                setNewPost(newPost + 1);
                setShowForm(false);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                toast.error("Network Error. Are you logged in?");
            });

        } catch (err) {
            console.error(err);
            toast.error("Network Error. Are you logged in?");
        }
    }
    

    return ( 
        <>
        <Subheader title="Community"/>
        {
            (selectedPost === -1) ? (
                <div className="flex justify-evenly flex-wrap flex-col p-2">
                    <div className="flex flex-row justify-around items-center min-h-24 mx-8 my-2 p-4 bg-slate-600 border-2 border-white rounded-lg">
                        {showForm ? (
                            <form className="w-full" onSubmit={handleSubmit(handleNewPost)}>
                                <div className="new-post flex flex-col items-start">
                                    <label className="text-2xl font-medium mb-1" htmlFor="title">Title:</label>
                                    <input
                                        type="text"
                                        placeholder="Write Post Title Here"
                                        className="mb-4 p-2 text-lg text-white bg-slate-900 rounded"
                                        {...register("title")}
                                    />
                                    <label className="text-2xl font-medium mb-1" htmlFor="content">Content:</label>
                                    <textarea
                                        placeholder="Write post content here"
                                        className="mb-4 p-2 text-lg text-white w-full min-h-32 bg-slate-900 rounded"
                                        {...register("content")}
                                    />
                                </div>
                                <button className="cta-btn mr-4 px-4 py-2 bg-slate-900 text-2xl">Send Post</button>
                                <button onClick={handleOpenForm} className="px-4 py-2 bg-slate-900 text-2xl">Discard Post</button>
                            </form>
                        ) : (
                            <button onClick={handleOpenForm} className="px-4 py-2 bg-slate-900 text-2xl">Create New Post</button>
                        )}
                    </div>
                    {
                        posts.map((post, index) => {
                            return (
                                <Post key={index}
                                    title={post.title}
                                    author={post.author}
                                    content={post.content}
                                    comments={post.comments}
                                    selected={false}
                                    select={() => handleSelection(index)}>
                                </Post>
                            )
                        })
                    }
                </div>
            ) : (
                <Post
                    title={posts[selectedPost].title}
                    author={posts[selectedPost].author}
                    content={posts[selectedPost].content}
                    comments={posts[selectedPost].comments}
                    selected={true}
                    select={() => handleSelection(-1)}
                    updatePostComments={updatePostComments}
                    >
                </Post>
            )
        }
        </>
     );
}
 
export default CommunityPage;