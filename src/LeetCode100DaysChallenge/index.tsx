import React, { Component, ReactNode } from "react";

declare global { // Module scope for global declaration
    interface Array<T> { // T stands for Type
        last(): T | -1;
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
    function twoSum(nums: number[], target: number) {

        let output: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    output.push(i, j);
                    return output;
                }
            }
        }
    };

    return (
        <>
            <div>test</div>
        </>
    );
}
