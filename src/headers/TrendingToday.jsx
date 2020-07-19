import React from 'react'
import TrendingPost from './TrendingPost'
import trendingPostsData from '../data/trendingPostsData'

export default function TrendingToday() {
  return (
    <div className='trending-today'>
      <p>Trending today</p>
      <div className='trending-posts'>
        <TrendingPost {...trendingPostsData[0]} />
        <TrendingPost {...trendingPostsData[1]} />
        <TrendingPost {...trendingPostsData[2]} />
        <TrendingPost {...trendingPostsData[3]} />
      </div>
    </div>
  )
}
