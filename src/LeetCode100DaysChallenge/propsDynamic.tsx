import React from "react";
import ReactDOM from 'react-dom';

export function PropsDynamic() {
    return (
        <>
            <div>React Portal</div>
            <MyPortalComponent>
                <div>Content rendered via portal</div>
            </MyPortalComponent>
        </>
    );
}
