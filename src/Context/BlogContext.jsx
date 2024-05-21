import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

    const loadBlogPosts = () => {
        const storedPosts = localStorage.getItem('blogPosts');
        return storedPosts ? JSON.parse(storedPosts) : [
            {
                id: 1,
                author: "Bosse Bosse",
                date: "5/11/2024",
                title: "Matchalatte är gott",
                text: "Occaecat nulla irure ullamco nulla eiusmod culpa quis tempor. Nostrud reprehenderit ea labore ex anim laboris consequat eu labore irure. Proident magna qui laboris qui quis duis nulla eu consequat do. Lorem cillum fugiat consequat proident pariatur non fugiat eu voluptate dolore minim...",
                canEdit: false
            },
            {
                id: 2,
                author: "Janne Janne",
                date: "5/13/2024",
                title: "Jag älskar öl",
                text: "Occaecat nulla irure ullamco nulla eiusmod culpa quis tempor. Nostrud reprehenderit ea labore ex anim laboris consequat eu labore irure. Proident magna qui laboris qui quis duis nulla eu consequat do. Lorem cillum fugiat consequat proident pariatur non fugiat eu voluptate dolore minim...",
                canEdit: false
            }
        ];
    };

    const [blogPosts, setBlogPosts] = useState(loadBlogPosts);

    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }, [blogPosts]);

    return (
        <BlogContext.Provider value={{ blogPosts, setBlogPosts }}>
            {children}
        </BlogContext.Provider>
    )
};

export const useBlog = () => {
    return useContext(BlogContext);
}
