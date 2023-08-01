import React, { Component, ReactNode } from "react";

interface State {
    opened: boolean;
}

interface Props {
    opened: boolean;
    onClose: () => void;
}

declare global { // Module scope for global declaration
    interface Array<T> { // T stands for Type
        last(): T | -1;
    }
}

export function LeetCode100DaysChallenge() {

    Array.prototype.last = function () {
        return (
            this.length === 0 ? -1 : this[this.length - 1] // Accessing array using "this"
        )
    }

    return (
        <>
            <div>test</div>
        </>
    );
}
