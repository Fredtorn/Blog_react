import React from "react";
import { Link } from "react-router-dom";

const BlogPostHome = ({ id, date, text, title, author }) => {


    return (
        <div >
            <div key={id} className="border-2 border-solid border-black w-1/2 p-5 font-serif mb-10">
                <h4 className="font-medium">{author}</h4>
                <p>{date}</p>
                <h2 className="text-3xl font-semibold mt-4 mb-4 overflow-auto" >{title}</h2>
                <p>{text.slice(0, 300)}...</p>
                <Link to={`/post/${id}`} className="underline">Read More</Link>
            </div>

        </div>

    );
};

export default BlogPostHome;