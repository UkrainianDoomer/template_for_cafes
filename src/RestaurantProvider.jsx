import { Outlet, useParams } from 'react-router-dom';

export default function RestaurantProvider({ children }) {
    const { id } = useParams();
    const name = id.replace(/-/g, ' ');
    return (
        <RestaurantContext.Provider value={{id, name}}>
            {children ?? <Outlet/>}
        </RestaurantContext.Provider>
    )
}