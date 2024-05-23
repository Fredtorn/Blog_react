import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import GetDate from "./GetDate";

const BlogPostForm = ({ onAddOrEdit, existingPost }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const { currentUser } = useAuth();

    useEffect(() => {
        if (existingPost) {
            setTitle(existingPost.title);
            setText(existingPost.text);
        }
    }, [existingPost]);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const author = currentUser.email;
        const date = GetDate();

        if (!title || !text) return;

        const post = {
            id: existingPost ? existingPost.id : Date.now(),
            title,
            text,
            author,
            date,
            comments: []
        };

        if (onAddOrEdit) {
            onAddOrEdit(post);
        } else {
            console.error("onAddOrEdit function is not defined");
        }

        setTitle('');
        setText('');

        window.location.href = "/";
    };

    return (
        <div className="m-10">
            <h2 className="text-3xl font-serif font-semibold mt-4 mb-4">
                {existingPost ? "Edit Blog Post" : "Write New Blog Post"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col border-2 border-solid border-black w-1/2 h-full p-5">
                <input
                    type="text"
                    value={title}
                    className="border-2 border-solid border-black mt-1 mb-1 p-5 text-wrap"
                    onChange={(ev) => setTitle(ev.target.value)}
                    placeholder="Enter title"
                />
                <textarea
                    value={text}
                    className="border-2 border-solid border-black mt-1 mb-1 p-5 min-h-[300px]"
                    onChange={(ev) => setText(ev.target.value)}
                    placeholder="Enter blog post text"
                />
                <button type="submit" className="border-2 border-solid border-black w-1/4 mt-1 mb-1 p-2 hover:bg-black hover:text-white">
                    {existingPost ? 'Update Post' : 'Publish New Post'}
                </button>
            </form>
        </div>
    );
};

export default BlogPostForm;
