import { useEffect, useState, useRef } from "react";
import './Hero.css'
import { Link, Navigate, useParams } from "react-router-dom";
import { useRestaurant } from "./RestaurantContext";

export default function Hero() {
  const {id, name} = useRestaurant();

  const meals = [
    { id: "breakfast", name: "Breakfast", img: "/images/hero/breakfast.jpg" },
    { id: "lunch", name: "Lunch", img: "/images/hero/lunch.jpg" },
    { id: "dinner", name: "Dinner", img: "/images/hero/dinner.jpg" },
    { id: "dessert", name: "Dessert", img: "/images/hero/dessert.jpg" },
    { id: "drinks", name: "Drinks", img: "/images/hero/drinks.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-scroll function
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const startAutoScroll = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % meals.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Smooth scroll on click
  const scrollToMeal = (mealId) => {
    const el = document.getElementById(mealId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      {meals.map((meal, i) => (
        <img
          key={meal.id}
          src={meal.img}
          alt={meal.name}
          className={`hero-bg ${i === currentIndex ? "active" : ""}`}
        />
      ))}

      <div className="hero-overlay">
        <h1 className="hero-title">Where Flavor Meets Soul</h1>
        <p className="hero-subtitle">Savor the moment. Explore our handcrafted meals, made with love and local charm.</p>
      </div>

      <div className="meal-selector">
        {meals.map((meal, i) => (
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
