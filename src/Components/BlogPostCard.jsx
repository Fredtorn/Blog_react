import { useBlog } from "../Context/BlogContext"

const BlogPostCard = () => {

    const { blogPosts } = useBlog();

    return (
        <div >
            {blogPosts.map((blogPost) => (
                <div className="border-2 border-solid border-black w-1/2 m-10 p-5 font-serif ">
                    <div key={blogPost.id}>
                        <h4 className="font-medium">{blogPost.author}</h4>
                        <p>{blogPost.date}</p>
                        <h2 className="text-3xl font-semibold mt-4 mb-4 overflow-auto" >{blogPost.title}</h2>
                        <p>{blogPost.text}</p>
                        <button className="mt-4 text-xs underline font-semibold">Read more</button>
                    </div>
                </div>

            ))}
        </div>

    );
};

export default BlogPostCard;