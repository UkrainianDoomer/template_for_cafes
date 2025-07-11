import React, { Suspense, useEffect } from 'react'
import './App.css'
import Header from './components/Header' 
import { useRestaurant } from './RestaurantContext'
import Spinner from './components/Spinner'
import Video from './components/Video'
import VideoBlock from './VideoBlock'
const Hero = React.lazy(() => import('./Hero'))
const Form = React.lazy(() => import('./components/Form'))
const Footer = React.lazy(() => import('./components/Footer'))
const TopMenu = React.lazy(() => import('./TopMenu'))
const HighlightSection = React.lazy(() => import('./components/HighlightSection'))


function App() {
  const { name } = useRestaurant()

  useEffect(() => {
    document.title = name;
  }, [name])

  useEffect(() => {
  const handleScroll = () => {
    const btn = document.getElementById("to-bottom");
    const form = document.getElementById("form");

    if (!btn || !form) return;

    const formTop = form.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Hide when form is visible or below
    if (formTop <= windowHeight * 0.9) {
      btn.classList.add("hidden");
    } else {
      btn.classList.remove("hidden");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Hero />
        <HighlightSection />
        <VideoBlock />
        <TopMenu />
        <Form />
        <Footer />

        <button
          onClick={() => {
            const target = document.getElementById("form");
            const header = document.getElementById("header");
            const h = target.offsetTop - header.clientHeight;
            window.scrollTo({ top: h, behavior: "smooth" });
          }}
          id="to-bottom"
        >
          ↓
        </button>
      </Suspense>
    </>
  );
}

export default App;
