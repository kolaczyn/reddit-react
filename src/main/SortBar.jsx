import React from "react";
import SortButton from "./SortButton";

export default function SortBar() {
  return (
    <div>
      <h3 id="popular-posts-header">Popular posts</h3>
      <ul className="sort-bar content">
        <div className="sort-bar-left">
          <SortButton label={"Hot"} hasIcon={true} active={true} />
          <SortButton label={"Poland▼"} hasIcon={false} active={true} />
          <SortButton label={"New"} hasIcon={true} active={false} />
          <SortButton label={"Top"} hasIcon={true} active={false} />
          <SortButton label={"..."} hasIcon={false} active={false} />
        </div>
        <div className="sort-bar-right">
          <a href="/" className={`btn sort-btn active-sort-true`}>
          <img src="assets/display-icon.png" width="16px" alt="" />
          <p>▼</p>
          </a>
          {/* <button className="sort-btn">▼</button> */}
          {/* <SortButton label={"▼"} hasIcon={true} active={false} /> */}
        </div>
      </ul>
    </div>
  );
}
