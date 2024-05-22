import { useState } from "react";
import { useBlog } from "../Context/BlogContext";
import { useAuth } from "../Context/AuthContext";
import GetDate from "./GetDate";

const NewBlogPostForm = ({ onAddOrEdit, existingPost }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const { blogPosts, setBlogPosts } = useBlog();
    const { currentUser } = useAuth();

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const id = blogPosts.length > 0 ? Math.max(...blogPosts.map(post => post.id)) + 1 : 1;
        const author = currentUser.email;
        const date = GetDate();

        if (!title || !text) return;
        setBlogPosts([{ title, text, author, id, date, canEdit: true }, ...blogPosts]);
        setTitle('');
        setText('');

        window.location.href = "/";


    };

    return (
        <div className="m-10">
            <h2 className="text-3xl font-serif font-semibold mt-4 mb-4">Write new blog post</h2>
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
                <button type="submit" className="border-2 border-solid border-black w-1/4 mt-1 mb-1 p-2">{existingPost ? 'Update Post' : 'Publish new post'}</button>


            </form>
        </div>

    );
};

export default NewBlogPostForm;