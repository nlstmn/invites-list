import React, { FC, useState, useCallback, useEffect, useRef } from "react";

export function PartThree() {

    /* 1 - Generate Range of numbers */
    let first = 1900, last = 2023;
    const years = [...new Array(last + 1).keys()].slice(first);
    // new Array(last + 1): creates a new array with a length of last + 1
    // keys(): to get an iterator over the indices of the array, starting from 0
    // [...iterable]: to convert the iterable into an actual array

    /* 2 - Add object properties conditionally */
    const h = true;
    const myData = {
        name: "Liana",
        age: 28,
        ...(h && { // Simply doesn't work without spread operator
            isProgrammer: true
        })
    };

    /* 3 - Destructuring function parameters */
    const button = document.querySelector('button'); // This is Vanilla JS so we can't see anything here in React
    button?.addEventListener("click", ({ target }) => {
        console.log(target)
    })
    // Without descructuring it will be this:
    button?.addEventListener("click", (e) => {
        console.log(e.target);
    });

    /* 4 - Restricting new properties on objects */
    const data = { name: "Liana", age: 28 };
    Object.seal(data);
    // data.hobby = "Walking"; // Will throw error because of .seal()
    data.age = 3000;
    console.log(data);

    /* 5 - Quick conversion to number */
    const smth = "6";
    const num = +smth; // Called Unary operator, but better to use parseInt - it's strict
    console.log(typeof (num))

    /* 6 - What will the console log out, how to fix it? */
    const database = {
        filterId: 'active',
        users: [
            {
                id: 'active',
                label: 'Active',
            },
            {
                id: 'inactive',
                label: 'Inactive',
            },
        ],
        getUsers: function () {
            return this.users.filter(function (user) {
                /* return user.id === this.filterId */
                // Problem is here: this keyword inside the filter function is not referring
                // to the database object, causing the filter to not work correctly.
                // To fix this, you can use an arrow function for the callback inside the filter function,
                // which will preserve the value of this from the surrounding context:
                // this.users.filter(user => user.id === this.filterId);
            })
        }
    }
    console.log(database.getUsers())

    /* 7 - Event loop: what will the console log out? */
    sleep(2000).then(() => {
        console.log(0)
    })
    console.log(1)
    setTimeout(() => {
        console.log(2)
    })
    function sleep(ms: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    }
    console.log(5)
    function myPromise() {
        abc().then((val) => {
            console.log(val)
            return myPromise() // Due to this recursiveness, it will be 1 5 6 6 6 6 6 6 6 6 ...
        })
    }
    function abc() {
        return new Promise((resolve) => {
            resolve(6)
        })
    }

    myPromise()

    return (
        <>
            <div>3rd Script</div>
        </>
    );
}
