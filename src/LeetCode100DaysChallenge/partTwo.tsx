import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function PartTwo() {

    console.log("Part Two")
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("OHA! ", count)
    });

    return (
        <>
            <div>2nd Script</div>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );
}
