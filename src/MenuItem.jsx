export default function MenuItem({ src, caption }) {
    return (
      <div className="image-wrapper">
        <img src={src} alt={caption} />
        <div className="image-text">{caption} {20}$</div>
      </div>
    );
  }
