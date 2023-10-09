import React, { Component, useEffect, useState } from "react";

function DataFetcher({ render }: any) {
    const [data, setData] = useState(null)
    useEffect(() => {

    }, [])
    return render(data)
}

export default function PropsDynamic() {
    return (
        <div>
            <h1>Data Fetching Example</h1>
            <DataFetcher
            rednder={(data) => (

            )}
            />
        </div>
    );
}
