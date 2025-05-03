import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation();

  let resName = location.pathname.replace("/", "").replace("-", " ")

  return (
    <>
    <Header/>
    <main>
        <div className="wrapper">
          <div className="main-content">
            <h1>{resName}</h1>
            <br />
            <p className="about">stroLorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis dignissimos numquam adipisci culpa, hic voluptatibus voluptatum totam. Numquam illo dolore velit quis ab et architecto voluptatum nulla! Similique, nisi!</p>
            <br />
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis dignissimos numquam adipisci culpa, hic voluptatibus voluptatum totam. Numquam illo dolore velit quis ab et architecto voluptatum nulla! Similique, nisi!</p>
            <br />              
          </div>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} id='to-bottom'>↓</button>
        </div>
      </main>
    <Form/>
      <Footer/>
    </>
  )
}

export default App
