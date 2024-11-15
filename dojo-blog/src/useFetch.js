import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error("Failed to fetch the data");
                })
                .then(data => {
                    setData(data);
                })
                .catch(err => {
                    setErrorMessage(err.message)
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }, 1000);    // Timeout is to simulate real life fetch delay

        return () => console.log("cleanup function ran"); // A Cleanup function: runs when the component unmounts or 
                                                         // before the effect is re-executed if the dependencies change
    }, [url]);

    return { data, isLoading, errorMessage };
}

export default useFetch;