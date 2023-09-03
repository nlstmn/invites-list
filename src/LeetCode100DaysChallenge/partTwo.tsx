import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function PartTwo() {

    /* 1 - Generics */
    const addUID = (obj: object) => {
        let uid = Math.floor(Math.random() * 100);
        return { ...obj, uid };
    }

    let person = addUID({ name: "Lia", age: 28 }); // This is called invoking
    // console.log(person.name) - Will give error because addUID doesn't know what exactly will exist in object

    // Same func, but with Generics logic
    const UIDgenerics = function <T>(obj: T) { // T can be any name btw
        let uid = Math.floor(Math.random() * 100);
        return { ...obj, uid };
    }

    let person2 = UIDgenerics({ name: "Didi", age: 35 }); // This is called invoking
    console.log(person2.name)

    return (
        <>
            <div>2nd Script</div>
        </>
    );
}
