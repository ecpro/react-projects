import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../contants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams(),
      restaurant = useRestaurant(id),
      dispatch = useDispatch(),
      handleAddItem = (item) => {
        console.log(item);
        dispatch(addItem(item))
      },
     menuItems = restaurant?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.find((card) => {
          return card.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
      }).card.card.itemCards;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="res-info">
      <div>
          <h1>Restaurant id: {id}</h1>
          <h2>{restaurant.cards[0]?.card?.card?.info.name}</h2>
          <img src={IMG_CDN_URL + restaurant.cards[0]?.card?.card?.info.cloudinaryImageId} />
          <h3>{restaurant.cards[0]?.card?.card?.info.area}</h3>
          <h3>{restaurant.cards[0]?.card?.card?.info.city}</h3>
          <h3>{restaurant.cards[0]?.card?.card?.info.avgRating} stars</h3>
      </div>
        <div>
            <ul>
                {
                    menuItems.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name}
                            <button onClick={() => handleAddItem(item.card.info) }>Add to Cart</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;
