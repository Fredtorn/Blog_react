import React from 'react';
import BlogPostForm from '../../Components/BlogPostForm';
import { useBlog } from '../../Context/BlogContext';

const NewPost = ({ existingPost }) => {
    const { setBlogPosts } = useBlog();

    const handleAddOrEdit = (post) => {
        setBlogPosts(prevPosts => {
            if (existingPost) {
                return prevPosts.map(p => p.id === post.id ? post : p);
            }
            return [post, ...prevPosts];
        });
    };

    return (
        <BlogPostForm existingPost={existingPost} onAddOrEdit={handleAddOrEdit} />
    );
};

export default NewPost;
