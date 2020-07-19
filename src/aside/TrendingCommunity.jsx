import React from 'react'

export default function TrendingCommunity({ id, subreddit, members }) {
  return (
    <div className='trending-community-container'>
      <img
        className='subreddit-icon'
        src={`assets/${subreddit}.png`}
        alt='trending community'
        width='32px'
      />
      <div className='trending-community-text'>
        <a href='/'>r/{subreddit}</a>
        <p>{members} members</p>
      </div>
      <button className='blue-btn'>JOIN</button>
    </div>
  )
}
