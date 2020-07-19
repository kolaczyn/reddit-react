import React from 'react'
import PostButton from './PostButton'

export default function Post(props) {
  let { title, content, upvotes, subreddit, user, timeAgo, comments } = props
  return (
    <div className='content post'>
      <aside>
        <div className='upvotes-container'>
          <img src='assets/false-upvote.png' alt='' width='18px' />
          <p>{upvotes}</p>
          <img src='assets/false-downvote.png' alt='' width='18px' />
        </div>
      </aside>
      <main>
        <header className='post-header'>
          <div className='post-header-left'>
            <a href='#'>
              <img
                src={`assets/${subreddit}.png`}
                className='subreddit-icon'
                alt=''
              />
              <p>r/{subreddit}</p>
            </a>
            <p className='posting-information'>
              Posted by u/{user} {timeAgo} ago
            </p>
          </div>
        </header>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
        <footer className='post-footer'>
          <ul>
            <PostButton
              {...{
                label: `${comments} Comments`,
                iconLocation: 'assets/comment.png',
              }}
            />
            <PostButton
              {...{
                label: `${comments} Share`,
                iconLocation: 'assets/share.png',
              }}
            />
            <PostButton
              {...{
                label: `${comments} Save`,
                iconLocation: 'assets/save.png',
              }}
            />
          </ul>
        </footer>
      </main>
    </div>
  )
}
