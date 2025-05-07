import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";

const RestaurantContext = createContext();
export const useRestaurant  = () => useContext(RestaurantContext);

export function RestaurantProvider({ children }) {
    const { id } = useParams();
    const name = id.replace(/-/g, ' ');
    return (
        <RestaurantContext.Provider value={{id, name}}>
            {children ?? <Outlet/>}
        </RestaurantContext.Provider>
    )
}