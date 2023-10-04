import React from "react";
import { useQuery, useQueryClient } from "react-query";
import ReactDOM from 'react-dom';

// Creating a portal
const MyPortalComponent = ({ children }: any) => {
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) {
        // Handle the case where 'portal-root' element is not found
        return null; // or some fallback JSX
    }
    return ReactDOM.createPortal(children, portalRoot);
};

export function ReactPortal() {



    return (
        <>
            <div>React Portal</div>
        </>
    );
}
