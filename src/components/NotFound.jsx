import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <h1>404</h1>
    <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
    <Link to="/place/Good-Restaurant">Go back home</Link>
  </div>
);

export default NotFound;