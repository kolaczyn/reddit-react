import React from "react";
import Button from "./Button";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav>
      <a href="/" className="logo">
        <img
          className="black-logo"
          width="32px"
          src="./assets/black-logo.png"
          alt="reddit logo"
        />
        <img
          className="black-reddit"
          height="18px"
          src="./assets/black-reddit.png"
          alt="black reddit"
        />
      </a>
      <Search />
      <div className="navbar-buttons">
        <Button label="LOG IN" color="white" />
        <Button label="SIGN UP" color="blue" />
      </div>
    </nav>
  );
}
