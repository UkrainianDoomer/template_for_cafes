import Image from "./components/Image";

export default function MenuItem({ src, caption, price = 20 }) {
  return (
    <div className="menu-card">
      <div className="menu-img-wrapper">
        {/* <img src={src} alt={caption}/> */}
        <Image src={`/cafemenu/${src.startsWith('/') ? src.slice(1) : src}`} height={250} width={250} alt={caption} className="menu-img"/>
      </div>
      <div className="menu-details">
        <h4>{caption}</h4>
        <span>{price}.00zł</span>
      </div>
    </div>
  );
}
