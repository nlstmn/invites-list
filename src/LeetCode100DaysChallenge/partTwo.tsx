import React, { FC, useState, useCallback, useEffect, useRef } from "react";
import classNames from "classnames";

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

    // Using stack
    function brackets(expression: string) {
        let stack = [];
        let current: string;
        const matchLookup: any = {
            "(": ")",
            "[": "]",
            "{": "}",
        };

        for (let i = 0; i < expression.length; i++) {
            current = expression[i];

            if (current === '(' || current === '[' || current === "{") {
                stack.push(current);
            } else if (current === ')' || current === ']' || current === "}") {
                const lastBracket = stack.pop() as string;
                if (matchLookup[lastBracket] !== current) { // If the stack is empty, .pop() returns undefined, so this expression is still correct
                    return false; // Terminate immediately - no need to continue scanning the string
                }
            }
        }

        return stack.length === 0; // Any elements mean brackets left open
    }

    console.log(brackets('(3+{1-1)}')); // false
    console.log(brackets('{[(3+1)+2]+}')); // true
    console.log(brackets('[1+1]+(2*2)-{3/3}')); // true
    console.log(brackets('(({[(((1)-2)+3)-3]/3}-3)')); // false

    /* 5 - Check if property exists in array */
    let targetObject: Array<any> = [];
    let propertyName: any;
    let result = targetObject.hasOwnProperty(propertyName); // 1st

    // 2nd
    let personn = {
        firstName: 'John',
        lastName: 'Doe'
    };
    let resultt = 'firstName' in person;
    console.log(resultt); // true
    resultt = 'age' in person;
    console.log(resultt); // false

    // 3rd
    let personnn = {
        firstName: 'John',
        lastName: 'Doe'
    };
    let resulttt = personnn.firstName !== undefined;
    console.log(result); // true

    /* 6 - What's the difference between addEventListener and onClick? */
    // onClick works in all browsers, addEventListener does not work in older versions.
    // addEventListener can add multiple events.
    // addEventListener can take a third argument which can stop the event propagation.
    // onClick can be added as an HTML attribute, addEventListener can only be added within <script> elements.

    /* 7 - Can the type be inherited in TS? */
    // No, but we can use Intersection Types OR extend it (it's not here):
    type Animal = { name: string; age: number };
    type Bird = { canFly: boolean };

    type BirdWithInfo = Animal & Bird;

    const bird: BirdWithInfo = {
        name: "Eagle",
        age: 5,
        canFly: true,
    };

    /* 8 - Classnames (Popupsmart Turkish Company Interview Question) */
    const isActive = true;
    const isDisabled = false;

    const buttonClasses = classNames("button", {
        "active": isActive,
        "disabled": isDisabled,
    });

    /* 9 - TypeScript Partial */
    type Userr = {
        firstName: string,
        lastName: string
    }

    let firstUser: Partial<Userr> = {
        firstName: "John"
    }

    // It's literally same as making it like this:
    type Userrr = {
        firstName?: string,
        lastName?: string
    }

    /* 10 - In JS and TS, a "first-class citizen" refers to a language feature
    that treats entities (such as functions and objects) as first-class citizens, 
    eaning they have the same rights and abilities as other entities in the language.
    Specifically, in JS, functions are considered first-class citizens. */

    /* 11 - Functional programming is a paradigm of building computer programs using
    expressions and functions without mutating state and data. It is a style of programming that
    emphasizes immutability, pure functions, and the use of higher-order functions.
    JavaScript supports functional programming and provides features that make it well-suited for this paradigm.*/

    /* 12 - TypeScript Tuple */
    let ourTuple: [number, boolean, string];
    ourTuple = [5, false, 'Coding God was here'];

    // Readonly tuple
    const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
    // Throws error as it is readonly:
    // ourReadonlyTuple.push('Coding God took a day off');

    /* 13 - What's the sequence of rendering in JS - animation, promise, setTimeout? */
    // Animations, Promises, Settimeout

    /* 14 - Operators ?? and ??= */
    const defaultValue = 'Hello, World!';
    const myValue = null ?? defaultValue; // Nullish Coalescing Operator: checks for "nullish" (null, undefined) values specifically
    console.log(myValue);

    let existingValue = 'I already have a value';
    existingValue ??= 'I am the new value'; // Nullish Assignment Operator
    console.log(existingValue); // Output: 'I already have a value'

    let nullValue = null;
    nullValue ??= 'I am the new value';
    console.log(nullValue); // Output: 'I am the new value'

    return (
        <>
            <button className={buttonClasses}></button>
            <div>2nd Script</div>
        </>
    );
}
