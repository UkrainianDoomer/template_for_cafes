import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const { id } = useParams(); // Access the `id` parameter here


  let resName = id.replace("-", " ")

  return (
  <header>
    <div className="logo-text">
      <Link to={`/place/${id}`}><h1>{resName ?? 'Restaurant Name'}</h1></Link>
    </div>
    <div className="nav-bar">
      <Link to={`/place/${id}`}><button><strong>Home</strong></button></Link>
      <Link to={`/place/${id}/menu`}><button><strong>Menu</strong></button></Link>
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