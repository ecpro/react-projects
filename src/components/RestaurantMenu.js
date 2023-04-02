import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../contants";

const RestaurantMenu = () => {
  //how to read a dynamic url params
  const params = useParams(),
    [restaurant, setRestaurant] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5102932&lng=77.03269809999999&restaurantId=${params.id}&submitAction=ENTER`
    );
    const restaurant = await data.json();
    console.log(restaurant);
    setRestaurant(restaurant.data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {params.id}</h1>
        <p>{JSON.stringify(restaurant)}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
