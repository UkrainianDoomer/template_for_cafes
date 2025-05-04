import React from 'react';
// import './Header.css'; // Assuming you have a CSS file for styling

const Header = ({ resName }) => {
  return (
  <header>
    <div className="logo-text">
      <h1>{resName ?? 'Restaurant Name'}</h1>
    </div>
    <div className="nav-bar">
      <a href="main"><button><strong>Home</strong></button></a>
      <a href="menu"><button><strong>Menu</strong></button></a>
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

  </header>)
}

export default Header;