import { useSelector, useDispatch } from "react-redux";
import {IMG_CDN_URL} from "../contants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => (store.cart.items)),
        dispatch = useDispatch(),
        handleEmptyCart = () => {
            console.log('handleEmptyCart');
            dispatch(clearCart())
        };

    return (
        <>
            <div>
                {
                    cartItems.length > 0 ? <button onClick={() => {handleEmptyCart()}}>Empty Cart</button> :
                 ''
                }
            </div>
            <div>
                <ul>
                    {cartItems.map((cartItem) => (
                        <li key={cartItem.id}>
                            <h3>{cartItem.name}</h3>
                            <h4>Price : {cartItem.price / 1000}</h4>
                            <img src={IMG_CDN_URL + cartItem.imageId}/>
                            <p>In Stock: {cartItem.inStock} <span>{cartItem.isVeg ? "VEG" : "NON-VEG"}</span></p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cart;
