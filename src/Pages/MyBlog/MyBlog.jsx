import { useBlog } from "../../Context/BlogContext";
import { useAuth } from "../../Context/AuthContext";
import BlogPostHome from "../../Components/BlogPostHome";

const MyBlog = () => {

    const { blogPosts } = useBlog();
    const { currentUser } = useAuth();

    const userBlogPosts = blogPosts.filter(post => post.author === currentUser.email);
    return (
        <main className="m-10">
            <h2 className="text-3xl font-serif font-semibold mt-4 mb-4">My blog</h2>

            {userBlogPosts.map(post => (
                <BlogPostHome id={post.id} author={post.author} title={post.title} text={post.text} date={post.date} />
            ))}
        </main>
    )
}

export default MyBlog;