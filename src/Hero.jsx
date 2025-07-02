import { useEffect, useState, useRef } from "react";
import './Hero.css'
import { Link } from "react-router-dom";
import { useRestaurant } from "./RestaurantContext";
import { MealSlides } from "./RestaurantContext";
import Image from "./components/Image";

export default function Hero() {
  const {id} = useRestaurant();


  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = MealSlides[currentIndex].priority;
  const intervalRef = useRef(null);

  // Auto-scroll function
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const startAutoScroll = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MealSlides.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <section className={`hero theme-${theme}`} id="hero">
      {MealSlides.map((meal, i) => (
        <Image
          loading="lazy"
          key={meal.id}
          src={`/cafemenu/slider/${meal.img.startsWith('/') ? meal.img.slice(1) : meal.img}`}
          alt={meal.name}
          className={`hero-bg ${i === currentIndex ? "active" : ""} image-${i+1}`}
        />
      ))}

      <div className="hero-overlay">
        <h1 className="hero-title">Where Flavor Meets Soul</h1>
        <p className="hero-subtitle">Savor the moment. Explore our handcrafted meals, made with love and local charm.</p>
      </div>

      <div className="meal-selector">
        {MealSlides.map((meal, i) => (
          <Link
            key={meal.id}
            className={`meal-item ${currentIndex === i ? "active" : ""}`}
            onMouseEnter={() => {
              stopAutoScroll();
              setCurrentIndex(i);
            }}
            onMouseLeave={() => {
              startAutoScroll();
            }}
            to={`/place/${id}/menu#${meal.id}`}
          >
            {meal.name}
            {currentIndex === i && <span className="arrow">→</span>}
          </Link>
        ))}
      </div>
    </section>
  );
}
