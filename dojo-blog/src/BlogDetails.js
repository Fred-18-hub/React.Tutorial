import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, errorMessage } = useFetch("http://localhost:8000/blogs/" + id);
    const routeHistory = useHistory();

    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        })
        .then(() => {
            console.log("Blog deleted successfully");
            routeHistory.push("/");
        });
    }
    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { errorMessage && <div>{ errorMessage }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;