import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <a href='/' className='logo'>
        <img
          className='black-logo'
          width='32px'
          src='./assets/black-logo.png'
          alt='reddit logo'
        />
        <img
          className='black-reddit'
          height='18px'
          src='./assets/black-reddit.png'
          alt='black reddit'
        />
      </a>
      {/* <div className="search-container"> */}
      <input placeholder='Search' className='search-bar' type='text' />
      {/* <img
          className="search-glass"
          src="assets/glass.png"
          width="16px"
          alt=""
        /> */}
      {/* </div> */}
      <div className='navbar-buttons'>
        <button className='white-btn'>LOG IN</button>
        <button className='blue-btn'>SIGN UP</button>
      </div>
    </nav>
  )
}
