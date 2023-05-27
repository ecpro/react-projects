import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //how to read a dynamic url params
  const params = useParams(),
      restaurant = useRestaurant(params.id);
  console.log('RestaurantMenu component called');
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {params.id}</h1>
        <p>{JSON.stringify(restaurant)}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
