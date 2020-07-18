import React from 'react'
import trendingCommunitiesData from './data/trendingCommunitiesData'
import TrendingCommunity from './TrendingCommunity'

export default function TrendingCommunities() {
  // console.log(trendingCommunitiesData)
  return (
    <div className="trending-communities content">
      <h3>Trending Communities</h3>
      <ul>
        {/* should probably use map to do this */}
        <li><TrendingCommunity {...trendingCommunitiesData[0]}/></li>
        <li><TrendingCommunity {...trendingCommunitiesData[1]}/></li>
        <li><TrendingCommunity {...trendingCommunitiesData[2]}/></li>
        <li><TrendingCommunity {...trendingCommunitiesData[3]}/></li>
        <li><TrendingCommunity {...trendingCommunitiesData[4]}/></li>
      </ul>
    </div>
  )
}