import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header' 
import Form from './components/Form'
import Footer from './components/Footer'
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  let resName = location.pathname.replace("/place", "").replace("/", "").replace("-", " ")

  useEffect(() => {
    document.title = resName;
  }, [resName])

  return (
    <>
      <Header resName={resName} />
      <main>
        <div className="wrapper">
          <div className="main-content">
            <h1 className='main-content-h'>{resName}</h1>
            <br />
            <p className="about">"<i>Where flavor meets comfort</i>"</p>
            <br />
            <p className="about">
            Located in the heart of the city, Good Restaurant is a cozy space for breakfast lovers, casual lunch seekers, and dinner gatherings. We craft each dish with fresh ingredients, attention to detail, and a touch of care — because food should nourish more than just the body.
              Whether you're stopping by for a quick coffee or spending the evening with friends, you're always welcome here.
              <br />
              <br />
📍 Open daily from 9:00 AM to 10:00 PM<br/>
📞 Reservations: +48 XXX XXX XXX
            </p>
            <br />              
          </div>
          <button onClick={() => {
            const target = document.getElementById("form")
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
          }} id='to-bottom'>↓</button>
        </div>
      </main>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
