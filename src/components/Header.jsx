import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Assuming you have a CSS file for styling

const Header = ({ resName }) => {
  return (
  <header>
    <div className="logo-text">
      <h1>{resName ?? 'Restaurant Name'}</h1>
    </div>
    <div className="nav-bar">
      <Link to="/"><button><strong>Home</strong></button></Link>
      <Link to="/menu"><button><strong>Menu</strong></button></Link>
      <button onClick={() => {
      const target = document.getElementById("footer")
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      }
      }><strong>Contact</strong></button>
      <button className='reservation-btn' onClick={() => {
      const target = document.getElementById("form")
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      }
      }><strong>Reservation</strong></button>
    </div>
  </header>
  );
}

export default Header;