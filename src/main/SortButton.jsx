import React from "react";

export default function SortButton({label, hasIcon, active}) {
  return (
    <li>
      <a href="/" className={`btn sort-btn active-sort-${active}`}>
        {hasIcon && <img src={`assets/${active}-${label}.png`} width="16px" alt="" />
        }
        <p>{label}</p>
      </a>
    </li>
  );
}
