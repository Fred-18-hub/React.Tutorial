import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Freddie");

    const handleClick = (e) => {
        setName("Kenneth");
    }

    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;