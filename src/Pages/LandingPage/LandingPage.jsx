import { useBlog } from "../../Context/BlogContext"

const LandingPage = () => {

    const { blogPosts } = useBlog();



    return (
        <main>
            {blogPosts.map((blogPost) => (
                <div key={blogPost.id}>
                    <h4>{blogPost.author}</h4>
                    <h2>{blogPost.title}</h2>
                    <p>{blogPost.text}</p>

                </div>
            ))}
        </main>
    );
};

export default LandingPage;