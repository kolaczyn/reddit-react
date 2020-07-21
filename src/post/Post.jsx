import React from 'react'
import PostButton from './PostButton'
import PostHeader from './PostHeader'

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
        <PostHeader subreddit={subreddit} user={user} timeAgo={timeAgo} />
        <h4>{title}</h4>
        {content && <p>{content}</p>}
        <footer className='post-footer'>
          <PostButton
            {...{
              label: `${comments} Comments`,
              iconLocation: 'assets/comment.png',
            }}
          />
          <PostButton
            {...{
              label: `Share`,
              iconLocation: 'assets/share.png',
            }}
          />
          <PostButton
            {...{
              label: `Save`,
              iconLocation: 'assets/save.png',
            }}
          />
          {/* it's a post button, but its a little different from the others, so I think it's easier to do it this way */}
          <a href='/' className={`btn post-btn elipsis`}> ...
      </a>
        </footer>
      </main>
    </div>
  )
}
