import React from 'react';
import './Footer.css';
import { useRestaurant } from '../RestaurantContext';

export default function Footer() {
  const {name} = useRestaurant();
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Telefon: +48 888-888-888</p>
          <p>Email: kontakt@ourmail.com</p>
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
          <h3>Szybkie linki</h3>
          <ul>
            <li><a href="/#form">Rezerwacje</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><a href="/#contact">Lokalizacje</a></li>
          </ul>
        </div>

        {/* Social & Subscribe */}
        <div className="footer-section">
          <h3>Bądź na bieżąco</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"/></a>
            <a href="#"><i className="fab fa-instagram"/></a>
            <a href="#"><i className="fab fa-twitter"/></a>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Twój email" required />
            <button type="submit">Dołącz</button>
          </form>
        </div>
      </div>

      {/* Embedded map */}
      <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39084.15672226012!2d20.972932577133182!3d52.247746512262935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc661b455407%3A0x2019a146fb49c9be!2z0JrQvtGA0L7Qu9C10LLRgdC60LjQuSDQt9Cw0LzQvtC6!5e0!3m2!1sru!2spl!4v1746298057504!5m2!1sru!2spl"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa"
    ></iframe>
      </div>

      <div className="footer-credits">
        &copy; {new Date().getFullYear()} {name}. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
