import { useState } from 'react'
import { useLocation } from "react-router-dom";
import App from './App';

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