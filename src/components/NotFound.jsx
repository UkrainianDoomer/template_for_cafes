import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <h1>404</h1>
    <img src="https://http.dog/404.jpg" alt="404 Nie znaleziono" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />
    <p>Ups! Strona, której szukasz, nie istnieje.</p>
    <Link to="/place/Good-Restaurant">Wróć do strony głównej</Link>
  </div>
);

export default NotFound;