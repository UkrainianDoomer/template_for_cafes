import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <h1>404</h1>
    <img src="https://http.dog/404.jpg" alt="404 Not Found" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />
    <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
    <Link to="/place/Good-Restaurant">Go back home</Link>
  </div>
);

export default NotFound;