import React from "react";
import { data } from "./dataVS";

export function VirtualScrolling() {

    return (
        <>
            <div>Virtual Scrolling</div>
            <table style={{ borderCollapse: "collapse" }}>
                <tbody>
                    {
                        data.map((row: any) =>
                            <tr key={row[0]}>
                                {
                                    Object.values(row).map((col: any) =>
                                        <td key={col} style={{ padding: 8, border: "1px solid #ccc" }}>
                                            {col}
                                        </td>)
                                }
                                <td>ggg</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    );
}
