import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function PartTwo() {

    /* 1 - Generics */
    const addUID = (obj: object) => {
        let uid = Math.floor(Math.random() * 100);
        return { ...obj, uid };
    }

    let person = addUID({ name: "Liana", age: 28 }); // This is called invoking
    // console.log(person.name) - Will give error because addUID doesn't know what exactly will exist in object

    return (
        <>
            <div>2nd Script</div>
        </>
    );
}
