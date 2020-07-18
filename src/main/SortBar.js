import React from "react";
import SortButton from "./SortButton"

export default function SortBar() {
  return (
    <div>
      <h3>Popular posts</h3>
      <ul className="sort-bar content">
        <SortButton label={"Hot"} hasIcon={true} active={true}/>
        <SortButton label={"Poland"} hasIcon={false} active={true}/>
        <SortButton label={"New"} hasIcon={true} active={false}/>
        <SortButton label={"Top"} hasIcon={true} active={false}/>
        <SortButton label={"..."} hasIcon={false} active={false}/>
      </ul>
    </div>
  );
}
