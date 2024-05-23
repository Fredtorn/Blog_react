import BlogPostCard from "../../Components/BlogPostHome";
import { useBlog } from "../../Context/BlogContext";

const Home = () => {

    const { blogPosts } = useBlog();
    return (
        <main>
            {blogPosts.map(post => (
                <BlogPostCard id={post.id} author={post.author} title={post.title} text={post.text} date={post.date} />
            ))}
        </main>
    );
};

export default Home;