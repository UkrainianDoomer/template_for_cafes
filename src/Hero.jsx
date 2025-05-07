import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const meals = [
    { id: "breakfast", name: "Breakfast", img: "/images/hero/breakfast.jpg" },
    { id: "lunch", name: "Lunch", img: "/images/hero/lunch.jpg" },
    { id: "dinner", name: "Dinner", img: "/images/hero/dinner.jpg" },
    { id: "dessert", name: "Dessert", img: "/images/hero/dessert.jpg" },
    { id: "drinks", name: "Drinks", img: "/images/hero/drinks.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMeal, setHoveredMeal] = useState(null);

  const displayedIndex = hoveredMeal
    ? meals.findIndex((m) => m.id === hoveredMeal)
    : currentIndex;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % meals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      className={`hero-bg ${i === displayedIndex ? "active" : ""}`}
    />
  ))}

  {/* === TEXT OVERLAY === */}
  <div className="hero-overlay">
    <h1 className="hero-title">Where Flavor Meets Soul</h1>
    <p className="hero-subtitle">Savor the moment. Explore our handcrafted meals, made with love and local charm.</p>
  </div>

  {/* === MEAL SELECTOR === */}
  <div className="meal-selector">
    {meals.map((meal, i) => (
      <div
        key={meal.id}
        className={`meal-item ${hoveredMeal === meal.id || currentIndex === i ? "active" : ""}`}
        onMouseEnter={() => setHoveredMeal(meal.id)}
        onMouseLeave={() => setHoveredMeal(null)}
        onClick={() => scrollToMeal(meal.id)}
      >
        {meal.name}
        {(hoveredMeal === meal.id || currentIndex === i) && (
          <span className="arrow">→</span>
        )}
      </div>
    ))}
  </div>
</section>

    );
}
