import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

const RestaurantContext = createContext();
export const useRestaurant  = () => useContext(RestaurantContext);

export const TextTheme = {
    LIGHT:   'light',
    DARK:    'dark',
    ACCENT:  'accent',
  };
  
  export const MealSlides = [

    { id: "breakfast", name: "Breakfast", img: "/images/hero/breakfast.jpg", priority: TextTheme.DARK   },
    { id: "lunch", name: "Lunch", img: "/images/hero/lunch.jpg", priority: TextTheme.DARK               },
    { id: "dinner", name: "Dinner", img: "/images/hero/dinner.jpg", priority: TextTheme.DARK            },
    { id: "dessert", name: "Dessert", img: "/images/hero/dessert.jpg", priority: TextTheme.LIGHT         },
    { id: "drinks", name: "Drinks", img: "/images/hero/drinks.jpg", priority: TextTheme.DARK            }
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