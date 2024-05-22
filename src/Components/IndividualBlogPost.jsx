import React from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "../Context/BlogContext"

const IndividualBlogPost = () => {

    const { id } = useParams();
    const { blogPosts } = useBlog();
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div key={post.id} className="border-2 border-solid border-black w-1/2 m-10 p-5 font-serif ">
            <h4 className="font-medium">{post.author}</h4>
            <p>{post.date}</p>
            <h2 className="text-3xl font-semibold mt-4 mb-4 overflow-auto" >{post.title}</h2>
            <p>{post.text}</p>
        </div>
    );

}

export default IndividualBlogPost