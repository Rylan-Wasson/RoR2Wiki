import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from "react-hot-toast";


const formSchema = z.object({
    comment: z.string().min(1, { message: "Must include content" }),
});


function Post(props) {
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [comments, setComments] = useState(props.comments);

    const handleOpenComments = (e) => {
        setShowCommentForm(!showCommentForm);
    }
    const token = localStorage.getItem("token");


    const handleNewComment = data => {
        //alert("helloworld");
        console.log('handle new comment called');
        
        try {
            data.title = props.title;
            fetch("http://localhost:3000/api/comments", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': token
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (!response.ok) {
                    console.error("Try logging out and logging back in.");
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("New comment created:", data);
                setComments(data.post.comments);
                props.updatePostComments(data.post.comments);
                setShowCommentForm(false);
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


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    return (
        props.selected ? (
            //the FORM below is closing the post when clicked on - but adding a prevention stops the form from working
            <div className="flex flex-col items-start mx-8 my-2 p-4 bg-slate-600 border-2 border-white rounded-lg">
                <p className="text-2xl font-medium">{props.title}</p>
                <p className="text-xl font-normal">Posted by {props.author}</p>
                <p className="text-xl my-4 text-left">{props.content}</p>
                <p className="text-2xl font-medium">Comments:</p>
                {
                    comments?.map((comment, index) => {
                        return (
                            <p key={index} className="text-lg">{comment.author}: {comment.comment}</p>
                        )
                    })
                }
                {
                    showCommentForm ? (
                        <form className="my-4 w-full items-start" onSubmit={handleSubmit(handleNewComment)}>
                            <div className="new-post flex flex-col items-start">
                                <label className="text-2xl font-medium mb-1" htmlFor="content">Leave a Comment:</label>
                                <textarea
                                    placeholder="Write comment here"
                                    className="mb-4 p-2 text-lg text-white w-full min-h-16 bg-slate-900 rounded"
                                    {...register("comment")}
                                />
                            </div>
                            <button type="submit" className="cta-btn mr-4 px-4 py-2 bg-slate-900 text-2xl">Send Comment</button>
                            <button type="button" className="px-4 py-2 bg-slate-900 text-2xl" onClick={handleOpenComments}>Discard Comment</button>
                        </form>
                    ) : (
                        <button className="px-4 py-2 my-4 bg-slate-900 text-2xl" onClick={handleOpenComments}>Leave a Comment</button>
                    )
                }
                
                <button className="px-4 py-2 bg-slate-900 text-2xl" onClick={props.select}>Back to Posts</button>
            </div>
        ) : (
            <div className="flex flex-row justify-between items-center h-24 mx-8 my-2 p-4 bg-slate-600 border-2 border-white rounded-lg" onClick={props.select}>
                <div className="flex flex-col items-start">
                    <p className="text-2xl">{props.title}</p>
                    <p className="text-xl">{props.author}</p>
                </div>
                <p className="text-xl">{`${comments ? comments.length : 0} Comments`}</p>
            </div>
        )
    )
}

export default Post;