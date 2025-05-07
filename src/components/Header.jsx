import React from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { useRestaurant } from '../RestaurantContext';
// import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const {id, name} = useRestaurant();

  return (
  <header>
    <div className="logo-text">
      <Link to={`/place/${id}`}><h1>{name ?? 'Restaurant Name'}</h1></Link>
    </div>
    <div className="nav-bar">
      <NavLink to={`/place/${id}`}><button><strong>Home</strong></button></NavLink>
      <NavLink to={`/place/${id}/menu`}><button><strong>Menu</strong></button></NavLink>
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