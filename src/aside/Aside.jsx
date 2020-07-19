import React from 'react'
import TrendingCommunities from './TrendingCommunities'
import TopCommunities from './TopCommunities'

export default function Aside() {
  return (
    <aside className='sidebar'>
      <TopCommunities />
      <TrendingCommunities />
    </aside>
  )
}
