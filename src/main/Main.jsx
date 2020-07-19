import React from 'react'
import SortBar from './SortBar'
import PostsTimeline from './PostsTimeline'

export default function Main() {
  return (
    <main className='main-section'>
      <SortBar />
      <PostsTimeline />
    </main>
  )
}
