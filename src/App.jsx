import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header' 
import Form from './components/Form'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const [quote, setQuote] = useState('');

  let resName = location.pathname.replace("/place", "").replace("/", "").replace("-", " ")

  useEffect(() => {
    document.title = resName;
  }, [resName])

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setQuote(data.slip.advice);

        // const data = await res.json();
        // const random = data;
        // setQuote(random.text);
        // setAuthor(random.author || 'Unknown');
      } catch (err) {
        console.error('Quote fetch failed:', err);
        setQuote('Something went wrong.');
      }
    }

    fetchQuote();
  }, []);

  return (
    <>
      <Header resName={resName} />
      <main>
        <div className="wrapper">
          <div className="main-content">
            <h1>{resName}</h1>
            <br />
            <p className="about">"<i>{quote}</i>"</p>
            <br />
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellat nobis dignissimos numquam adipisci culpa, hic voluptatibus voluptatum totam. 
              Numquam illo dolore velit quis ab et architecto voluptatum nulla! Similique, nisi!
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
