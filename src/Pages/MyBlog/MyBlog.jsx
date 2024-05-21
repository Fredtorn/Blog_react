import { useBlog } from "../../Context/BlogContext";
import { useAuth } from "../../Context/AuthContext";
import BlogPostCard from "../../Components/BlogPostCard";

const MyBlog = () => {

    const { blogPosts } = useBlog();
    const { userName } = useAuth();

    const userBlogPosts = blogPosts.filter(post => post.author === userName);

    return (
        <main>
            {userBlogPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
            ))}
        </main>
    )
}

export default MyBlog;