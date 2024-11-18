import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("phil");
    const [isLoading, setIsLoading] = useState(false);
    const routeHistory = useHistory();

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const blog = { title, body, author };
        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
            .then(() => {
                setIsLoading(false);
                console.log("Blog added successfully");
                routeHistory.push("/");
            });
        }, 500);
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="phil">phil</option>
                    <option value="joe">joe</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled style={{ cursor: "not-allowed" }}>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;