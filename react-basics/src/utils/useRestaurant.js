import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurantInfo() {
        const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5102932&lng=77.03269809999999&restaurantId=${resId}&submitAction=ENTER`
            ),
            json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    return restaurant;
}

export default useRestaurant;
