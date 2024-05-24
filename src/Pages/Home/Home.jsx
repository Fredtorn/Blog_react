import BlogPostHome from "../../Components/BlogPostHome";
import { useBlog } from "../../Context/BlogContext";

const Home = () => {

    const { blogPosts } = useBlog();
    return (
        <main className="m-10">
            <h1 className="w-1/2 text-5xl font-serif font-semibold mt-4 mb-10">B. - The Blog</h1>
            {blogPosts.map(post => (
                <BlogPostHome id={post.id} author={post.author} title={post.title} text={post.text} date={post.date} />
            ))}
        </main>
    );
};

export default Home;