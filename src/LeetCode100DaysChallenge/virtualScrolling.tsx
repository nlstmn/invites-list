import React, { useState } from "react";
import { data } from "./dataVS";

export function VirtualScrolling() {
    const [scrollTop, setScrollTop] = useState(0)

    const limit = 20;
    const visibleData = data.slice(0, limit);
    const rowHeight = 36;

    return (
        <>
            <div>Virtual Scrolling - {scrollTop}px</div>
            <div onScroll={e => setScrollTop(e.currentTarget.scrollTop)} style={{ height: 500, overflow: "auto" }}>
                <table style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        {
                            visibleData.map((row: any) =>
                                <tr key={row[0]} style={{ height: rowHeight }}>
                                    {
                                        Object.values(row).map((col: any) =>
                                            <td key={col} style={{ padding: 8, border: "1px solid #ccc" }}>
                                                {col}
                                            </td>)
                                    }
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
