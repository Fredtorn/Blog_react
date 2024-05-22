import BlogPostCard from "../../Components/BlogPostCard";
import { useBlog } from "../../Context/BlogContext";

const LandingPage = () => {

    const { blogPosts } = useBlog();
    return (
        <main>
            {blogPosts.map(post => (
                <BlogPostCard id={post.id} author={post.author} title={post.title} text={post.text} date={post.date} />
            ))}
        </main>
    );
};

export default LandingPage;