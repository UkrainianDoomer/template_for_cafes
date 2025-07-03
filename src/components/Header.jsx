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
        aria-label="Przełącz nawigację"
        onClick={() => setMenuOpen(open => !open)}
      >
        ☰
      </button>

      <div className={`nav-bar${menuOpen ? ' open' : ''}`}>
        <NavLink to={`/place/${id}`}>Strona główna</NavLink>
        <NavLink to={`/place/${id}/menu`}>Menu</NavLink>
        <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
          Kontakt
        </button>
        <button className="reservation-btn" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
          Rezerwacja
        </button>
      </div>
    </header>
  );
}