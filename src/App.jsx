import React, { Suspense, useEffect } from 'react'
import './App.css'
import Header from './components/Header' 
import { useRestaurant } from './RestaurantContext'
import Spinner from './components/Spinner'
import Video from './components/Video'
import VideoBlock from './VideoBlock'
import { Helmet } from 'react-helmet'
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
        <Helmet>
          <title>{name} | Modern Bistro</title>
          <meta name="description" content={`Welcome to ${name}, where taste meets elegance. Discover our menu, ambiance, and more!`} />
          <meta property="og:title" content={`${name} | Modern Bistro`} />
          <meta property="og:description" content={`Experience the best of ${name}. Reserve your table today!`} />
          <meta property="og:image" content="/homepage.png" />
          <meta property="og:type" content="restaurant" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${name} | Modern Bistro`} />
          <meta name="twitter:description" content={`Enjoy a unique dining experience at ${name}.`} />
          <meta name="twitter:image" content="/homepage.png" />
          <meta name="theme-color" content="#f5e9dc" />
          <link rel="icon" href="/favicon.svg" />
        </Helmet>
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
