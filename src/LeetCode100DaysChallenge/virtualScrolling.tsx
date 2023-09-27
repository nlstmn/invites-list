import React, { FC, useState, useCallback, useEffect, useRef } from "react";
import { data } from "./dataVS";

(function () {
    let str = "Good evening"
    console.log(str);
})();

export function VirtualScrolling() {

    /* 1 - Generics */
    const addUID = (obj: object) => {
        let uid = Math.floor(Math.random() * 100);
        return { ...obj, uid };
    }

    return (
        <>
            <div>Virtual Scrolling</div>
            <table style={{ borderCollapse: "collapse" }}>
                <tbody>
                    {
                        data.map((row: any) =>
                            <tr key={row[0]}>
                                {
                                    row.map((col: any) =>
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
