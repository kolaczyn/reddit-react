import React from 'react'

export default function TrendingCommunity({id, subreddit, members}) {
  return (
    <div>
      <img className="subreddit-icon" src={`assets/${subreddit}.png`} width="32px"/>
      <p>{subreddit}</p>
    </div>
  )
}
