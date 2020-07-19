import React from 'react'

export default function TrendingPost({
  id,
  title,
  description,
  subreddit,
  image,
}) {
  return (
    <a href='/' className='trending-post' id={'trending-post' + id}>
      <img src={image} alt='rending post' width='256px' />
      <div className='trending-post-overlay'>
        <div className='trending-post-text'>
          <p className='trending-post-title'>{title}</p>
          <p className='trending-post-description'>{description}</p>
          <div className='trending-post-footer'>
            <img
              className='trending-post-subreddt'
              src={`assets/${subreddit}.png`}
              alt='trending post'
            />
            <p>r/{subreddit} and more</p>
          </div>
        </div>
      </div>
    </a>
  )
}
