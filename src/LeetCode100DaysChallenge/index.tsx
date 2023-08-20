import React, { FC, useState, useCallback, useEffect } from "react";

declare global { // Module scope for global declaration
    interface Array<T> { // T stands for Type
        last(): T | -1;
    }
}
class ListNode { // Writing this because TS doesn't know what is ListNode
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function LeetCode100DaysChallenge() {

    /* Array Prototype Last */
    Array.prototype.last = function () {
        return (
            this.length === 0 ? -1 : this[this.length - 1] // Accessing array using "this"
        )
    }

    /* Two Sum */
    function twoSum(nums: number[], target: number) { // Can be also solved with Hashmaps

        let output: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    output.push(i, j);
                    return output;
                }
            }
        }
    }

    /* Add Two Numbers */
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null { // Linked lists
        if (!l1 && !l2 && !carry) return null;

        let total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
        carry = parseInt(total / 10 + '');

        return new ListNode(total % 10, addTwoNumbers(l1?.next as ListNode, l2?.next as ListNode, carry)) // as is needed for undefined warning resolve
    };

    const list1 = new ListNode(2, new ListNode(4, new ListNode(3))); // This is how linked list is defined - it's an object
    const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    addTwoNumbers(list1, list2, 0);

    /* Необходимо написать такую функцию sum,
    которую можно вызвать сколько угодно раз, и эта функция вернёт
    сумму аргументов из всех предыдущих вызовов. Например: sum(1)(5)(4) == 10 */
    function sum(initialValue: any) {
        let currentSum = initialValue || 0;

        function innerSum(nextValue: any) { // Solved with closures
            currentSum += nextValue;
            return innerSum;
        }

        innerSum.toString = function () {
            return currentSum;
        };

        return innerSum;
    }
    console.log("Sum func problem => ", sum(1)(5)(4).toString()); // Function chaining

    /* Что выведется в консоле? */
    const arr: Array<any> = [];
    let i: any = 0;

    while (i !== 10) {
        arr[i++] = function () {
            return i;
        };
    }

    console.log("Console array problem => ", arr[3]()); // It will display 3

    /* Что не так в этом коде? */
    const [pageNumber, setPageNumber] = useState(0);

    function getNewPage(pageNumber: any) { }
    function handleClick() {
        setPageNumber(pageNumber + 1); // Problem with async state update
        const page = getNewPage(pageNumber);
    }
    // Solution
    function handleClickk() {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
    useEffect(() => {
        const page = getNewPage(pageNumber); // Now pageNumber is synchronized
    }, [pageNumber]);

    /* Написать функцию convert, которая принимает массив
    с полем id и возвращает объект, где id уже является ключом */
    /* Initial array:
    [
        { id: 'a', name: 'Alex' },
        { id: 'b', name: 'Max' }
    ]
    */
    /* Final object:
    {
        a: {id: a, name: 'Alex'},
        b: {id: a, name: 'Max'}
    }
    */
    function convert(data: any) {
        let result: any = {}
        for (let i of data) {
            let res = Object.assign({}, i)
            result[res.id] = res
        }
        return result
    }

    return (
        <>
            <div>test</div>
        </>
    );
}
