import { Link, useParams } from "react-router-dom";

import './TopMenu.css'

import MenuItem from "./MenuItem"
import chach from './assets/chach.jfif';
import salad from './assets/salad.jpg';
import { GetImagesUrls } from "./menu";
import { useRestaurant } from "./RestaurantContext";

export default function TopMenu() {
    const {id, name} = useRestaurant();

    const imgs = GetImagesUrls(5);

    return (
        <section className="topmenu">
            <h2>Welcome to Our Paradise</h2>
            <p>Discover our top {imgs.length} meals:</p>
            <div className="menu-items">
                {imgs.map((item, i) => (
                    <MenuItem key={i} src={item.src} caption={item.caption} index={i} />
                ))}
            </div>
            <div className="menu-footer">
                <Link to={`/place/${id}/menu`} className="more-button">
                    Explore Full Menu →
                </Link>
            </div>
        </section>
    )
}