import React from 'react'
import Post from './Post'
import postsData from '../data/postsData'

export default function PostsTimeline() {
  return (
    <div>
      {postsData.map(post => {
        return <Post {...post} />
      })}
    </div>
  )
}
