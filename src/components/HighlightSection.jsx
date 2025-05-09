import leftimg from '../assets/images/meat2.jpg'
import rightimg from '../assets/images/meat.jpg'
import './HighlightSection.css'

export default function HighlightSection() {
    return (
      <section className="highlight-section">
        <div className="highlight-image">
          <img src={leftimg} alt="Dish Left" />
        </div>
  
        <div className="highlight-text">
          <h2>Our Passion on a Plate</h2>
          <p>
            Crafted with love, our dishes combine local ingredients with international flavors.
            Whether you're craving tradition or innovation, we've got something to satisfy every soul.
          </p>
          <p>
            Come for the food, stay for the atmosphere. We don’t just cook—we create culinary stories.
          </p>
        </div>
  
        <div className="highlight-image">
          <img src={rightimg} alt="Dish Right" />
        </div>
      </section>
    );
  }
  