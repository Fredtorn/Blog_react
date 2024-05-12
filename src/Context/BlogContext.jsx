import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([
        {
            id: 1,
            author: "Bosse Bosse",
            title: "Matcha latte är gott",
            text: "Occaecat nulla irure ullamco nulla eiusmod culpa quis tempor. Nostrud reprehenderit ea labore ex anim laboris consequat eu labore irure. Proident magna qui laboris qui quis duis nulla eu consequat do. Lorem cillum fugiat consequat proident pariatur non fugiat eu voluptate dolore minim",
            canEdit: false
        },
        {
            id: 2,
            author: "Janne Janne",
            title: "Jag älskar öl",
            text: "Occaecat nulla irure ullamco nulla eiusmod culpa quis tempor. Nostrud reprehenderit ea labore ex anim laboris consequat eu labore irure. Proident magna qui laboris qui quis duis nulla eu consequat do. Lorem cillum fugiat consequat proident pariatur non fugiat eu voluptate dolore minim",
            canEdit: false
        }
    ])
    return (
        <BlogContext.Provider value={{ blogPosts }}>
            {children}
        </BlogContext.Provider>
    )
};

export const useBlog = () => {
    return useContext(BlogContext);
}
