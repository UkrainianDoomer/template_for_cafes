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
        <section className="reservation" id="form">
            <h2>Make a Reservation</h2>
            <form
                action="https://formsubmit.co/14af3c499b63487baff858f327e39249"
                method="POST"
            >
            

                <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
                <input name="_formsubmit_id" type="text" style={{ display: 'none' }}></input>
                <div className="frst-form-row">
                    <div className="name-form">
                        <label htmlFor="name">Name:</label>
                        <input
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Your Name"
                />
            </div>
                <br />
            <div className="email-form">   
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                />
            </div>
                <br />
            <div className="phone-form">        
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                />
            </div>
                </div>
                <br />


                <div className="scd-form-row">
                        <div className="date-form">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                />
            </div>
                <br />
                <div className="time-form">
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                />
            </div>
                <br />
            <div className="guests-form">
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    placeholder="Number of Guests"
                />
            </div>
                <br />
                </div>
            <button type="submit">Reserve Now</button>
            
            </form>
        </section>
    );
};

export default Form;