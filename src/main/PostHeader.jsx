import React from 'react'

export default function PostHeader({ subreddit, user, timeAgo }) {
    return (<header className='post-header'>
        <a href='#'>
            <img
                src={`assets/${subreddit}.png`}
                className='subreddit-icon small'
                alt=''
            />
        </a>
        <a href='#' className='bold'>
            r/{subreddit}
        </a>
        <a href="#" className='gray'>Posted by u/{user} {timeAgo} ago</a>
        <div className="flex-filler"></div>
        <button className="blue-btn compact">+JOIN</button>
    </header>

    )
}
