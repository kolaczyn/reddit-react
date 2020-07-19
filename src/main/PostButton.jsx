import React from 'react'

export default function PostButton({ label, iconLocation }) {
  return (
    <li>
      <a href='/' className='btn post-btn'>
        {<img src={iconLocation} width='16px' alt='' />}
        <p>{label}</p>
      </a>
    </li>
  )
}
