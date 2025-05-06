import { useState } from 'react'
import { useLocation } from "react-router-dom";
import App from './App';

/**
 * @deprecated This function is deprecated and may be removed in future versions.
 */
function RouteManager () {
    const location = useLocation();

    switch (true) {
        case location.pathname.startsWith('/place'):
            return <App />;
        case location.pathname === '/main':
            return <App />;
        default:
            return <App />;
    }
}

export default RouteManager