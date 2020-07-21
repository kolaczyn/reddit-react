import React from 'react'

export default function TopCommunity({ place, subreddit, rising }) {
  return (
    <li>
      <a href='/' className='top-community'>
        <section>{place}</section>
        <img src={rising ? 'assets/green-triangle.png' : 'assets/red-triangle.png'} height='8px' />
        <img
          className='subreddit-icon medium'
          src={`assets/${subreddit}.png`}
          alt={subreddit}
        />
        <section>r/{subreddit}</section>
      </a>
    </li>
  )
}
