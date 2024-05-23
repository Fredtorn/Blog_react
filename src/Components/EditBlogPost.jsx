import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../Context/BlogContext';
import NewPost from '../Pages/NewPost/NewPost';

const EditBlogPost = () => {
    const { id } = useParams();
    const { blogPosts, setBlogPosts } = useBlog();
    const existingPost = blogPosts.find(post => post.id === parseInt(id));

    const handleUpdateBlogPost = (updatedPost) => {
        setBlogPosts(prevPosts => prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post));
    };

    return (
        <div>
            <NewPost
                existingPost={existingPost}
                onAddOrEdit={handleUpdateBlogPost}
            />
        </div>
    );
};

export default EditBlogPost;
