import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import {useOnline} from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
    </a>
);

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false),
        handleLoginClick = () => {
            setLoggedIn(!loggedIn);
        },
        { user } = useContext(UserContext),
        carItems = useSelector((store) => store.cart.items);

    return (
        <div className="header">
            <Title/>

            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <li>Contact</li>
                    <Link to='/instamart' style={{paddingRight: 10}}>
                        <li>Instamart</li>
                    </Link >
                    <Link to={'/cart'}>
                        <li>{carItems.length > 0 ? 'Cart(' + carItems.length + ')': 'Cart'}</li>
                    </Link>
                </ul>
                <h6>{user.name}</h6>
            </div>
            {useOnline() ? '✅' : '❌'}
            <button onClick={handleLoginClick}>
                {loggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default Header;
