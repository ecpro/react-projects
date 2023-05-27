import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
    [restaurant, setRestaurant] = useState(null);
    console.log('useRestaurant hook called');
    async function getRestaurantInfo() {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5102932&lng=77.03269809999999&restaurantId=${resId}&submitAction=ENTER`
        );
        const restaurant = await data.json();
        console.log('getRestaurantInfo in useRestaurant Called');
        //const restaurant = await getRestaurantById(resId);
        console.log(restaurant.data);
        setRestaurant(restaurant.data);
        return restaurant;
    }

    useEffect(() => {
        console.log('useEffect in useRestaurant Called');
        getRestaurantInfo();
    },[]);

    return restaurant;
}

export default useRestaurant;
