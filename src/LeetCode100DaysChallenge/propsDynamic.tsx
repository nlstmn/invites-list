import React, { Component, useEffect, useState } from "react";

/* The term "render prop" refers to a function that a component
receives as a prop and uses to render its content, allowing you
to share functionality and data between components. */

function DataFetcher({ render }: any) {
    const [data, setData] = useState(null)
    useEffect(() => {

    }, [])
    return render(data)
}

export function PropsDynamic() {
    return (
        <div>
            <h1>Data Fetching Example</h1>
            <DataFetcher
                render={(data: any) => (
                    <div>
                        {
                            data ? <h1>Data here</h1> : <h1>No data</h1>
                        }
                    </div>
                )}
            />
        </div>
    );
}
