
import Header from './components/Header';
import Footer from './components/Footer';

import './menu.css';

import babuska from './assets/babuska_vibe.jpg';
import chach from './assets/chach.jfif';
import salad from './assets/salad.jpg';
import shit from './assets/main-bck.jpeg';

function Menu() { 
  const imgs = [
    { src: babuska, caption: 'Babuska Vibes' },
    { src: chach, caption: 'Chachapuri' },
    { src: salad, caption: 'Fresh Salad' },
    { src: shit, caption: 'Main View' },
    { src: babuska, caption: 'Grandma Again' },
    { src: salad, caption: 'Salad 2' },
    { src: shit, caption: 'Scenery' },
  ];

  return (
    <>
      <Header />
      <main className='menu-wrapper'>
        <h2 className="menu-title">Our Gallery</h2>
        <div className="gallery">
          {imgs.map((item, i) => (
            <div className="image-wrapper" key={i}>
              <img src={item.src} alt={`Gallery ${i + 1}`} />
              <div className="image-text">{item.caption}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Menu;
