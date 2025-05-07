
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import MenuItem from './MenuItem';

import './menu.css';

import babuska from './assets/babuska_vibe.jpg';
import chach from './assets/chach.jfif';
import salad from './assets/salad.jpg';
import shit from './assets/main-bck.jpeg';

function Menu() { 
  const imgs = GetImagesUrls();

  return (
    <>
      <Header />
      <main className='menu-wrapper'>
        <h2 className="menu-title">Our Gallery</h2>
        <div className="gallery">
          {imgs.map((item, i) => (
            <MenuItem key={i} src={item.src} caption={item.caption} index={i} />
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
