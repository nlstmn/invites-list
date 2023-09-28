import React, { useState } from "react";
import { data } from "./dataVS";

export function VirtualScrolling() {
    const [scrollTop, setScrollTop] = useState(0)
    const rowHeight = 36;

    const limit = 20;
    const startNode = Math.floor(scrollTop / rowHeight)
    const visibleData = data.slice(startNode, startNode + limit);
    const startRowHeight = scrollTop + rowHeight
    const endRowHeight = data.length * rowHeight - startRowHeight

    return (
        <>
            <div>Virtual Scrolling - {scrollTop}px</div>
            <div onScroll={e => setScrollTop(e.currentTarget.scrollTop)} style={{ height: 500, overflow: "auto" }}>
                <table style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr style={{ height: startRowHeight }}></tr>
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
                        <tr style={{ height: endRowHeight }}></tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
