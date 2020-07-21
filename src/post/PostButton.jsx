import React from 'react'

export default function PostButton({ label, iconLocation }) {
  return (
    <a href='/' className={`btn post-btn ${label}`}>
      <img src={iconLocation} height='16px' alt='' />
      {label}
    </a>
  )
}
