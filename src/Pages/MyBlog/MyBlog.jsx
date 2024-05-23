import { useBlog } from "../../Context/BlogContext";
import { useAuth } from "../../Context/AuthContext";
import BlogPostCard from "../../Components/BlogPostHome";

const MyBlog = () => {

    const { blogPosts } = useBlog();
    const { currentUser } = useAuth();

    const userBlogPosts = blogPosts.filter(post => post.author === currentUser.email);
    return (
        <main>
            {userBlogPosts.map(post => (
                <BlogPostCard id={post.id} author={post.author} title={post.title} text={post.text} date={post.date} />
            ))}
        </main>
    )
}

export default MyBlog;