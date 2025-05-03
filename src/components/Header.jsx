import React from 'react';
// import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
    <header>
        <div className="logo-text">
            <h1>Restaurant Name</h1>
        </div>
        <div className="nav-bar">
            <a href="index.html"><button><strong>Home</strong></button></a>
            <a href="menu.html"><button><strong>Menu</strong></button></a>
            <a href="contact.html"><button><strong>Contact</strong></button></a>
            <a href="reservation.html"><button className='reservation-btn'><strong>Reservation</strong></button></a>
        </div>

    </header>)
}

export default Header;