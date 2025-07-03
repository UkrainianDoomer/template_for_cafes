import { Link } from "react-router-dom";

import MenuItem from "./MenuItem"
import { GetTopImages } from "./menu";
import { useRestaurant } from "./RestaurantContext";

import './TopMenu.css'

export default function TopMenu() {
    const { id } = useRestaurant();

    const imgs = GetTopImages();

    return (
        <section className="topmenu">
            <h2>Witamy w naszym kulinarnym raju</h2>
            <p>Odkryj nasze {imgs.length} najlepszych dań:</p>
            <div className="menu-items">
                {imgs.map((item, i) => (
                    <MenuItem key={i} src={item.src} caption={item.caption} index={i} price={item.price} />
                ))}
            </div>
            <div className="menu-footer">
                <Link to={`/place/${id}/menu`} className="more-button">
                    Zobacz całe menu →
                </Link>
            </div>
        </section>
    )
}