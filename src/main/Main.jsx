import React from 'react'
import SortBar from './SortBar'
import PostsTimeline from './PostsTimeline'

export default function Main() {
  return (
    <main className='main-section'>
      <h3 id='popular-posts-header'>Popular posts</h3>
      <SortBar />
      <PostsTimeline />
    </main>
  )
}
