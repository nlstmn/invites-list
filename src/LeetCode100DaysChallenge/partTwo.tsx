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

    // OK, now how to say that I want the passed parameter to be exactly an object?
    const generType = function <T extends object>(obj: T) { }

    // How to also say that I want the passed parameter to be exactly an object with exact properties inside?
    const generProperties = function <T extends { name: string }>(obj: T) { }
    let person3 = generProperties({ name: "Liz", age: 40 }) // You can also pass some extra shit here - like age

    // With Interfaces
    interface Resource<T> {
        uid: number;
        resourceName: string;
        dating: T;
    }

    const person4: Resource<string> = { // Here we specify the type of dating below
        uid: 1,
        resourceName: "me",
        dating: "hello"
    }

    const person5: Resource<string[]> = {
        uid: 1,
        resourceName: "me",
        dating: ["hello", "bye"]
    }

    /* 2 - Omit */
    // It's a Utility type, excludes properties. Opposite of Pick type.

    type User = {
        firstName: string;
        lastName: string;
        age: number;
    }

    // We could do like this:
    type User2 = {
        firstName: string;
        lastName: string;
    }

    // But with Omit we will not duplicate types:
    type User3 = Omit<User, "age">;

    /* 3 - Pick */
    type User4 = Pick<User, "lastName" | "age">; // Second argument can be also a Union, like here

    /* 4 - Check the sequence of opening and closing brackets in string */
    function check(expr: string) {
        const holder = []
        const openBrackets = ['(', '{', '[']
        const closedBrackets = [')', '}', ']']
        for (let letter of expr) {
            if (openBrackets.includes(letter)) {
                holder.push(letter)
            } else if (closedBrackets.includes(letter)) {
                const openPair = openBrackets[closedBrackets.indexOf(letter)] // Find it's pair
                if (holder[holder.length - 1] === openPair) { // Check if that pair is the last element in the array
                    holder.splice(-1, 1) // If so, remove it
                } else { // If it's not
                    holder.push(letter)
                    break // Exit loop
                }
            }
        }
        return console.log((holder.length === 0)) // Return true if length is 0, otherwise false
    }
    check('[[{asd}]]') // true

    return (
        <>
            <div>2nd Script</div>
        </>
    );
}
