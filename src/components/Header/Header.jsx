import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Order Your Favourite Coffee Here</h2>
        <p>
        Indulge in the rich, aromatic world of our coffee point. From freshly brewed espressos to creamy lattes and everything in between, our mission is to ignite your senses and provide a cozy, inviting space for coffee lovers to gather and savor every sip.
        </p>
        <a href="#explore-menu">
          <button>View Flavours</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
