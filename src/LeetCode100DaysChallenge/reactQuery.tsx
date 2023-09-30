import React from "react";
import { useQuery } from "react-query"; // Automatic caching, no need of manual data storage

export function ReactQuery() {

    async function fetchDataFunc() {
        try {
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('An error occurred while fetching data:', error);
            throw error;
        }
    }

    /* 1 - Query for fetching data instead of useEffect hook */
    const { data, isLoading } = useQuery("myData", fetchDataFunc);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <div>React Query</div>
        </>
    );
}
