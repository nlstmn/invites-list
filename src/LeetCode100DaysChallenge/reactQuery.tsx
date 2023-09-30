import React from "react";
import { useQuery } from "react-query"; // Automatic caching, no need of manual data storage

export function ReactQuery() {

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
