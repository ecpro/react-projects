import { useState } from "react";

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
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {loggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(false);
            console.log(loggedIn);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setLoggedIn(true);
            console.log(loggedIn);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
