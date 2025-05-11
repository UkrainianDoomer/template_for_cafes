// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useRestaurant } from '../RestaurantContext';
// import './Header.css';

// const Header = () => {
//   const { id, name } = useRestaurant();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollTo = (id) => {
//     const target = document.getElementById(id);
//     if (target) {
//       const header = document.getElementById("header");
//       const offset = target.offsetTop - (header?.offsetHeight || 0);
//       window.scrollTo({ top: offset, behavior: 'smooth' });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <header id="header">
//       <div className="logo-text">
//         <NavLink to={`/place/${id}`}><h1>{name ?? 'Restaurant Name'}</h1></NavLink>
//       </div>

//       <button className="hamburger" onClick={() => {
//         console.log("Switch to " + !menuOpen);
//         setMenuOpen(!menuOpen); 
//         }}>
//         ☰
//       </button>

//       <nav className={`nav-bar ${menuOpen ? 'open' : ''}`}>
//         <NavLink to={`/place/${id}`} onClick={() => setMenuOpen(false)}><button><strong>Home</strong></button></NavLink>
//         <NavLink to={`/place/${id}/menu`} onClick={() => setMenuOpen(false)}><button><strong>Menu</strong></button></NavLink>
//         <button onClick={() => scrollTo("footer")}><strong>Contact</strong></button>
//         <button className="reservation-btn" onClick={() => scrollTo("form")}><strong>Reservation</strong></button>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRestaurant } from '../RestaurantContext';
import './Header.css';

export default function Header() {
  const { id, name } = useRestaurant();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="logo-text">
        <NavLink to={`/place/${id}`}>
          <h1>{name}</h1>
        </NavLink>
      </div>

      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        ☰
      </button>

      <div className={`nav-bar${menuOpen ? ' open' : ''}`}>
        <NavLink to={`/place/${id}`}>Home</NavLink>
        <NavLink to={`/place/${id}/menu`}>Menu</NavLink>
        <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
          Contact
        </button>
        <button className="reservation-btn" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
          Reservation
        </button>
      </div>
    </header>
  );
}