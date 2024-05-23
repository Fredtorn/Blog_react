import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBlog } from "../Context/BlogContext";
import { useAuth } from "../Context/AuthContext";
import Comment from "./Comment";

const IndividualBlogPost = () => {

    const { id } = useParams();
    const { blogPosts, addCommentToPost } = useBlog();
    const post = blogPosts.find(post => post.id === parseInt(id));
    const { currentUser } = useAuth();

    const [comments, setComments] = useState([]);

    const handleAddComment = (comment) => {
        setComments([comment, ...comments]);
        addCommentToPost(post.id, comment);
    };

    if (!post) {
        return (
            <>
                <Link to={"/"} className="underline font-semibold font-serif ml-12">Back to Home</Link>
                <div className="text-3xl font-serif font-semibold mt-4 mb-4 ml-12">Your blog post has now been deleted.</div>;
            </>
        )
    }

    const { deleteBlogPost } = useBlog();

    const handleDelete = () => {
        deleteBlogPost(post.id);
    };


    return (
        <>
            <Link to={"/"} className="underline font-semibold font-serif ml-12">Back to Home</Link>
            <div key={post.id} className="border-2 border-solid border-black w-1/2 m-10 p-5 font-serif ">
                <h4 className="font-medium">{post.author}</h4>
                <p>{post.date}</p>
                <h2 className="text-3xl font-semibold mt-4 mb-8 overflow-auto" >{post.title}</h2>
                <p className="mb-10">{post.text}</p>
                {currentUser.email === post.author && (
                    <>
                        <Link to={`/edit/${id}`} className="border-black border-2 border-solid px-3 py-2.5 my-3 mr-3 hover:bg-black hover:text-white">Edit Post</Link>
                        <button onClick={handleDelete} className=" px-4 py-2 my-3 mr-3 text-white bg-black">Delete</button>
                    </>
                )}
                <Comment comments={comments} onAddComment={handleAddComment} />
            </div>
        </>
    );

}

export default IndividualBlogPost;