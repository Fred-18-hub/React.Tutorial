import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, errorMessage } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {errorMessage && <div>{errorMessage || "Failed to fetch blogs"}</div>}
        </div>
    );
}

export default Home;