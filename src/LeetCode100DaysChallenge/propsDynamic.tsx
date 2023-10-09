import React, { Component, useEffect, useState } from "react";

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
