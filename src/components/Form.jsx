import React from 'react';
import './Form.css';
import { useRestaurant } from '../RestaurantContext';

export default function Form() {
    const {id, name} = useRestaurant();
  return (
    <section className="form-section" id="form">
      <div className="form-card">
        <h2 className="form-title">Make a Reservation</h2>
        <form
          action="https://formsubmit.co/14af3c499b63487baff858f327e39249"
          method="POST"
        >
          {/* Honeypot to deter bots */}
          <input type="hidden" name="_next" value={`http://localhost:5173/place/${id}`} />
          <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@domain.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input id="time" name="time" type="time" required />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Guests</label>
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
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
}
