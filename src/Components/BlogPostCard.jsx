import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ id, date, text, title, author }) => {


    return (
        <div >
            <div key={id} className="border-2 border-solid border-black w-1/2 m-10 p-5 font-serif ">
                <h4 className="font-medium">{author}</h4>
                <p>{date}</p>
                <h2 className="text-3xl font-semibold mt-4 mb-4 overflow-auto" >{title}</h2>
                <p>{text}</p>
                <Link to={`/post/${id}`} className="underline">Read More</Link>
            </div>

        </div>

    );
};

export default BlogPostCard;