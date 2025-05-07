import React, { Suspense, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header' 
import { useRestaurant } from './RestaurantContext'
import Spinner from './components/Spinner'
const Hero = React.lazy(() => import('./Hero'))
const Form = React.lazy(() => import('./components/Form'))
const Footer = React.lazy(() => import('./components/Footer'))
const TopMenu = React.lazy(() => import('./TopMenu'))
const HighlightSection = React.lazy(() => import('./components/HighlightSection'))


function App() {
  const { id, name } = useRestaurant()

  useEffect(() => {
    document.title = name;
  }, [name])

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Hero />
        <HighlightSection />
        <TopMenu />
        <Form />
        <Footer />

        <button
          onClick={() => {
            const target = document.getElementById("form");
            window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
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
