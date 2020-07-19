import React from 'react'

export default function TopCommunity({ place, subreddit, rising }) {
  return (
    <li>
      <a href='/' className='top-community'>
        <img
          className='subreddit-icon'
          src={`assets/${subreddit}.png`}
          alt={subreddit}
        />
        <p>r/{subreddit}</p>
      </a>
    </li>
  )
}
