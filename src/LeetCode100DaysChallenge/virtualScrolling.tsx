import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function VirtualScrolling() {

    /* 1 - Generics */
    const addUID = (obj: object) => {
        let uid = Math.floor(Math.random() * 100);
        return { ...obj, uid };
    }

    return (
        <>
            <div>Virtual Scrolling</div>
        </>
    );
}
