export default function MenuItem({ src, caption, price = 20 }) {
  return (
    <div className="menu-card">
      <div className="menu-img-wrapper">
        <img src={src} alt={caption} className="menu-img" />
      </div>
      <div className="menu-details">
        <h4>{caption}</h4>
        <span>${price}</span>
      </div>
    </div>
  );
}
