import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteManager from './RouteManager.jsx'
import Menu from './menu.jsx'

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App.jsx';

const RedirectToMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu');
  }, [navigate]);

  return null;
};

const RedirectToGoodReustarant = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/place/Good-Reustarant');
  }, [navigate]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/place/:id/menu" element={<Menu />} />
        <Route path="/place/:id" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
