
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import MenuItem from './MenuItem';

import './menu.css';
import { menuItems } from './menuData';

const groupedByType = MealSlides.map(({ id, name }) => ({
  id,
  name,
  items: menuItems.filter(item => item.type === id),
}));


// TODO: Divide Menu on types: Breakfast, Lunch, Dinner, Dessert and Drinks, 
// for links in main menu 
function Menu() { 
  const imgs = GetImagesUrls();

  return (
    <>
      <Header />
      <main className='menu-wrapper'>
        <h2 className="menu-title">Our Gallery</h2>
        <div className="gallery">
          {/* {imgs.map((item, i) => (
            <MenuItem key={i} src={item.src} caption={item.caption} index={i} />
          ))} */}
          {groupedByType.map(({ id, name, items }) => (
            <section key={id} id={id} className="menu-section">
              <h3 className="meal-type-title">{name}</h3>
              <div className="gallery">
                {items.map((item, i) => (
                  <MenuItem key={i} src={item.src} caption={item.caption} />
                ))}
              </div>
            </section>
          ))}

        </div>
      </main>
      <Form />
      <Footer />
    </>
  );
  }


export function GetImagesUrls(max = -1) {
  const images = Object.entries(import.meta.glob('./assets/images/*.{png,jpg,jpeg,jfif}', { eager: true }))
    .map(([path, module]) => ({
      src: module.default,
      caption: path.split('/').pop().replace(/\.[^/.]+$/, '').replace(/_/g, ' ')
    }));

  return max === -1 ? images : images.slice(0, max);
}

export default Menu;
