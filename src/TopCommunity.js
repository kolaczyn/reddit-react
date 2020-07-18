import React from 'react'

export default function TopCommunity({place, subreddit, rising}) {
  console.log(subreddit)
  return (
    <li>
    <a className="top-community">
       <img className="subreddit-icon" src={`assets/${subreddit}.png`}/>
       <p>r/{subreddit}</p>
    </a>
    </li>
  )
}
