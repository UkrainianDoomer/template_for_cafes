import React from 'react';
import './Footer.css';
import { useRestaurant } from '../RestaurantContext';

export default function Footer() {
  const {id, name} = useRestaurant();
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +48 888-888-888</p>
          <p>Email: contact@ourmail.com</p>
          <p>123 Food Street,<br/>Flavor Town</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon–Fri: 8am – 10pm</p>
          <p>Sat–Sun: 9am – 11pm</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/#form">Reservations</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><a href="/#contact">Locations</a></li>
          </ul>
        </div>

        {/* Social & Subscribe */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"/></a>
            <a href="#"><i className="fab fa-instagram"/></a>
            <a href="#"><i className="fab fa-twitter"/></a>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Join</button>
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
        title="Map"
    ></iframe>
      </div>

      <div className="footer-credits">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
