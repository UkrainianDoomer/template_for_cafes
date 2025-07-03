import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

const RestaurantContext = createContext();
export const useRestaurant = () => useContext(RestaurantContext);

export const TextTheme = {
    LIGHT:   'light',
    DARK:    'dark',
    ACCENT:  'accent',
};
  
export const MealSlides = [
    { id: "sniadanie", name: "Śniadanie", img: "breakfast.jpg", priority: TextTheme.DARK   },
    { id: "lunch", name: "Lunch", img: "lunch.jpg", priority: TextTheme.DARK               },
    { id: "obiad", name: "Obiad", img: "dinner.jpg", priority: TextTheme.DARK              },
    { id: "deser", name: "Deser", img: "dessert.jpg", priority: TextTheme.LIGHT            },
    { id: "napoje", name: "Napoje", img: "drinks.jpg", priority: TextTheme.DARK            }
];

export function RestaurantProvider({ children }) {
    const { id } = useParams();
    const name = id.replace(/-/g, ' ');
    return (
        <RestaurantContext.Provider value={{id, name}}>
            {children ?? <Outlet/>}
        </RestaurantContext.Provider>
    )
}