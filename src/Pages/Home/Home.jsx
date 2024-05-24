import BlogPostHome from "../../Components/BlogPostHome";
import { useBlog } from "../../Context/BlogContext";

const Home = () => {

    const { blogPosts } = useBlog();
    return (
        <main>
            {blogPosts.map(post => (
                <BlogPostHome id={post.id} author={post.author} title={post.title} text={post.text} date={post.date} />
            ))}
        </main>
    );
};

export default Home;