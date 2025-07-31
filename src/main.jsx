import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { RestaurantProvider } from './RestaurantContext.jsx';
import Menu from './menu.jsx'
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import './styles/global.css'
import ScrollToTop from './components/ScrollToTop.jsx';
import { Analytics } from '@vercel/analytics/react';
import { Navigate } from "react-router-dom";

function WithRestaurant() {
  return <RestaurantProvider><Outlet/></RestaurantProvider>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/place/Savieno" replace />} />
          <Route element={<WithRestaurant/>}>
            <Route path="/place/:id/menu" element={<Menu />} />
            <Route path="/place/:id" element={<App />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    <Analytics />
  </StrictMode>,
)
