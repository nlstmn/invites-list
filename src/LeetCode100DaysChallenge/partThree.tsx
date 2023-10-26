import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function PartThree() {

    /* 1 - Generate Range of numbers */
    let first = 1900, last = 2023;
    const years = [...new Array(last + 1).keys()].slice(first);
    // new Array(last + 1): creates a new array with a length of last + 1
    // keys(): to get an iterator over the indices of the array, starting from 0
    // [...iterable]: to convert the iterable into an actual array
    console.log(years)

    /* 2 - Add object properties conditionally */
    const h = true;
    const myData = {
        name: "Liana",
        age: 28,
        ...(h && { // Simply doesn't work without spread operator
            isProgrammer: true
        })
    };

    console.log('drfzj ', myData)

    return (
        <>
            <div>3rd Script</div>
        </>
    );
}
