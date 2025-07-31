import React from 'react';
import './Footer.css';
import { useRestaurant } from '../RestaurantContext';
import GoogleMap from './GoogleMap';

export default function Footer() {
  const {id, name} = useRestaurant();
  return (
    <footer id="footer">
      <div className="footer-container" id="contact">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Telefon: +48 888-888-888</p>
          <p>Email: dna.digital.structure.solutions@gmail.com</p>
          <p>ul. Food 123,<br/>Flavor Town</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Godziny otwarcia</h3>
          <p>Pon–Pt: 8:00 – 22:00</p>
          <p>Sob–Ndz: 9:00 – 23:00</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Menu na skróty</h3>
          <ul>
            <li><a href={`/place/${id}#form`}>Rezerwacje</a></li>
            <li><a href={`/place/${id}/menu`}>Menu</a></li>
            <li><a href={`/place/${id}#contact`}>Lokalizacje</a></li>
          </ul>
        </div>

        {/* Social & Subscribe */}
        <div className="footer-section">
          <h3>Dołącz do nas</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"/></a>
            <a href="#"><i className="fab fa-instagram"/></a>
            <a href="#"><i className="fab fa-twitter"/></a>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Twój email" required />
            <button type="submit">Zapisz się</button>
          </form>
        </div>
      </div>

      {/* Embedded map */}
      <GoogleMap/>

      <div className="footer-credits">
        &copy; {new Date().getFullYear()} {name}. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
