import React from 'react';
import './Form.css';
import { useRestaurant } from '../RestaurantContext';

export default function Form() {
    const {id} = useRestaurant();
  return (
    <section className="form-section" id="form">
      <div className="form-card">
        <h2 className="form-title">Zarezerwuj stolik</h2>
        <form
          action="https://formsubmit.co/14af3c499b63487baff858f327e39249"
          method="POST"
        >
          {/* Ukryte pole do ochrony przed botami */}
          <input type="hidden" name="_next" value={`http://localhost:5173/place/${id}`} />
          <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Twoje imię i nazwisko"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="twoj@mail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+48 123 456 789"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Data</label>
              <input id="date" name="date" type="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Godzina</label>
              <input id="time" name="time" type="time" required />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Liczba gości</label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="20"
                defaultValue="2"
                required
              />
            </div>
          </div>

          <button type="submit" className="form-submit-btn">
            Zarezerwuj
          </button>
        </form>
      </div>
    </section>
  );
}
