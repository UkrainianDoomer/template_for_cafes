import React, { useState } from 'react';

const Form = () => {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     date: '',
    //     time: '',
    //     guests: 1,
    // });


    return (
        <section className="reservation">
            <form action="https://formsubmit.co/14af3c499b63487baff858f327e39249" method="POST">
                <h2>Make a Reservation</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                />
                <br />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                />
                <br />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                />
                <br />
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                />
                <br />
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    placeholder="Number of Guests"
                />
                <br />
                <button type="submit">Reserve Now</button>
            </form>
        </section>
    );
};

export default Form;