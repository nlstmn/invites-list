import React, { Component, ReactNode } from "react";

interface State {
    opened: boolean;
}

interface Props {
    opened: boolean;
    onClose: () => void;
}

export function LeetCode100DaysChallenge() {
    console.log("For debugging")
    return (
        <>
            <div>test</div>
        </>
    );
}
