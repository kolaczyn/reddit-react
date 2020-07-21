import React from 'react'
import TrendingCommunities from './aside/TrendingCommunities'
import TopCommunities from './aside/TopCommunities'

export default function Aside() {
  return (
    <aside className='sidebar'>
      <TopCommunities />
      <TrendingCommunities />
    </aside>
  )
}
