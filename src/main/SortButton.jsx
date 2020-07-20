import React from 'react'

export default function SortButton({ label, icon, active }) {
  return (
    <li>
      <a href='/' className={`btn sort-btn ${label} ` + (active ? 'active ' : ' ')}>
        {icon && (
          <img src={`assets/${active}-${icon}`} height='16px' alt='' />
        )}
        <p>{label === 'elipsis' ? '...' : label}</p>
      </a>
    </li>
  )
}