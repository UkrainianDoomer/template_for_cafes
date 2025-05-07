import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [hoveredMeal, setHoveredMeal] = useState(null);

  const meals = [
    { id: "breakfast", name: "Breakfast", img: "/images/hero/breakfast.jpg" },
    { id: "lunch", name: "Lunch", img: "/images/hero/lunch.jpg" },
    { id: "dinner", name: "Dinner", img: "/images/hero/dinner.jpg" },
    { id: "dessert", name: "Dessert", img: "/images/hero/dessert.jpg" },
    { id: "drinks", name: "Drinks", img: "/images/hero/drinks.jpg" }
  ];

  const bgImage = hoveredMeal ? meals.find(m => m.id === hoveredMeal).img : meals[0].img;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="meal-selector">
        {meals.map(meal => (
          <div
            key={meal.id}
            className={`meal-item ${hoveredMeal === meal.id ? "active" : ""}`}
            onMouseEnter={() => setHoveredMeal(meal.id)}
            onMouseLeave={() => setHoveredMeal(null)}
            onClick={() => window.location.href = `/menu#${meal.id}`}
          >
            {meal.name}
            {hoveredMeal === meal.id && <span className="arrow"> →</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
