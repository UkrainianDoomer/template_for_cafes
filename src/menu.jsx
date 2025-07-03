
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import MenuItem from './MenuItem';
import { MealSlides } from './RestaurantContext';

import './menu.css';
import { menuItems } from './menuData.js';


function Menu() { 

  const groupedByType = GroupedByType();

  return (
    <>
      <Header />
      <main className='menu-wrapper' id="menu">
      <h2 className="menu-title">Nasza Galeria</h2>

      {groupedByType.map(({ id, name, items }) => (
        <section key={id} id={id} className="menu-section">
        <a href={`#${id}`}><h3 className="meal-type-title">{name}</h3></a>
        <div className="gallery">
          {items.map((item, i) => (
          <MenuItem key={i} src={item.src} caption={item.caption} price={item.price} />
          ))}
        </div>
        </section>
      ))}
      
      </main>

      <Form />
      <Footer />
    </>
    );
  }

export function GroupedByType() {
  return MealSlides.map(({ id, name }) => ({
    id,
    name,
    items: menuItems.filter(item => item.type === id),
  }));
}

export function GetTopImages() {
  const images = GroupedByType()
    .map(({items}) => ({
      src: items[items.length-1].src,
      caption: items[items.length-1].caption
  }) )
  
  return images;
}

export default Menu;
