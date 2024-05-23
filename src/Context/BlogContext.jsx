import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const loadBlogPosts = () => {
        const storedPosts = localStorage.getItem('blogPosts');
        return storedPosts ? JSON.parse(storedPosts) : [
            {
                id: 1,
                author: "Lily Anderson",
                date: "5/11/2024",
                title: "The Enchanting Duo: Sunsets and Sunflowers",
                text: "Nature has a way of mesmerizing us with its simplicity and grandeur. Among its many wonders, sunsets and sunflowers stand out as two of the most captivating. Both have inspired countless poems, paintings, and moments of reflection. In this blog post, we delve into the magic of sunsets and sunflowers, exploring their beauty, symbolism, and the joy they bring to our lives.The Magic of Sunsets. Sunsets are nature’s daily finale, a spectacular display of colors that marks the transition from day to night. Each sunset is unique, offering a palette of hues ranging from fiery reds and oranges to soft pinks and purples. The science behind this beauty lies in the scattering of light by the atmosphere, which filters out the shorter blue wavelengths and allows the longer red and orange wavelengths to dominate the sky.",
                canEdit: false,
                comments: [],
            },
            {
                id: 2,
                author: "Ethan Brooks",
                date: "5/13/2024",
                title: "The Rise and Fall of And One: A '90s Synthpop Odyssey",
                text: "In the vibrant landscape of '90s music, one band carved out a niche for themselves with their unique blend of synthpop, electronic beats, and thought-provoking lyrics. And One, a German electronic music outfit formed in 1989, embarked on a journey that saw them rise to prominence and experience the highs and lows of the music industry during that iconic decade. Let's take a closer look at the rise and fall of And One in the '90s.The Emergence of Synthpop.The '90s witnessed a resurgence of interest in electronic music, with synthpop bands like Depeche Mode and Erasure leading the way. And One emerged during this era, drawing inspiration from the synthesizer-driven soundscapes of their predecessors while infusing their music with a distinctively gritty and industrial edge. Their debut album, Anguish, released in 1991, garnered attention for its innovative sound and introspective lyrics, laying the foundation for their ascent in the music industry.",
                canEdit: false,
                comments: [],
            }
        ];
    };

    const [blogPosts, setBlogPosts] = useState(loadBlogPosts);

    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }, [blogPosts]);

    const deleteBlogPost = (id) => {
        setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };

    const updateBlogPost = (updatedPost) => {
        setBlogPosts(prevPosts => prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post));
    };

    const addCommentToPost = (postId, comment) => {
        setBlogPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
            )
        );
    };

    return (
        <BlogContext.Provider value={{ blogPosts, setBlogPosts, deleteBlogPost, updateBlogPost, addCommentToPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    return useContext(BlogContext);
};
