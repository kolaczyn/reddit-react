import React from "react";
import Button from "./Button"
import Search from "./Search"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="./assets/black-logo.png" alt="reddit logo" />
        <img src="./assets/black-reddit.png" alt="black reddit" />
      </div>
      <Search/>
        <Button label="LOG IN" color="white"/>
        <Button label="SIGN UP" color="blue"/>
    </nav>
  );
}
