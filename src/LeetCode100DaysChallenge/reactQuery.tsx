import React from "react";
import { useQuery, useQueryClient } from "react-query"; // Automatic caching, no need of manual data storage

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
    /* const { data, isLoading } = useQuery("myData", fetchDataFunc);

    if (isLoading) {
        return <h2>Loading...</h2>
    } */

    /* 2 - Same query, built-in retry and error handling */
    const { error, isError, isLoading } = useQuery(
        "myData",
        fetchDataFunc,
        { retry: 3 }
    );

    const queryClient = useQueryClient();
    const retryQuery = () => {
        queryClient.invalidateQueries('myData'); // Retry the query using queryClient
    };

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return (
            <div>
                <p>Error: {(error as Error).message}</p>
                <button onClick={retryQuery}>Error: {(error as Error).message}</button>
            </div>
        )
    }

    /* 3 - Same query, real time updates */
    const { data } = useQuery(
        "myData",
        fetchDataFunc,
        { refetchInterval: 2000 } // Refresh data every 2 seconds
    );

    return (
        <>
            <div>React Query</div>
        </>
    );
}
