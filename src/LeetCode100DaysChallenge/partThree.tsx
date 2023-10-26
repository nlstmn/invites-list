import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function PartThree() {

    /* 1 - Generate Range of numbers */
    let first = 1900, last = 2023;
    const years = [...new Array(last + 1).keys()].slice(first);

    return (
        <>
            <div>3rd Script</div>
        </>
    );
}
