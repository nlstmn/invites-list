import React from "react";
import ReactDOM from 'react-dom';

/* A portal refers to a feature that allows you to render a component's
children into a different DOM (Document Object Model) location, typically
outside of the parent component's hierarchy. Portals are useful for scenarios
where you want to render content from one part of your React component tree
into another part of the HTML structure, such as rendering a modal or a tooltip
outside of the main application container. */

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
