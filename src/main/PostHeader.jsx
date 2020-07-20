import React from 'react'

export default function PostHeader({ subreddit, user, timeAgo }) {
    return (<header className='post-header'>
        <a href='#'>
            <img
                src={`assets/${subreddit}.png`}
                className='subreddit-icon'
                alt=''
            />
        </a>
        <section>
            <a href='#'>
                r/{subreddit}
            </a>
            <p className='gray'>
                <a href="#">Posted by u/{user} {timeAgo} ago</a>
            </p>
        </section>
    </header>

    )
}
