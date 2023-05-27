import {useState} from "react";
import {Link} from "react-router-dom";
import {useOnline} from "../utils/useOnline";

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
        };
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
                    <Link to='/instamart'>
                        <li>Instamart</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {useOnline() ? '✅' : '❌'}
            <button onClick={handleLoginClick}>
                {loggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default Header;
