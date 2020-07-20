import React from 'react'
import topCommunitiesData from '../data/topCommunitiesData'
import TopCommunity from './TopCommunity'

export default function TopCommunities() {
  return (
    <div className='content' id='top-communities'>
      <h3>Top Programming Communities</h3>
      <ul>
        {topCommunitiesData.map((community, i) => {
          // let p = { place: i };
          return (
            <div>
              <TopCommunity {...community} />
            </div>
          )
        })}
      </ul>

      <button className='blue-btn view-all-btn'>VIEW ALL</button>
      <ul className='top-communities-footer'>
        <li>
          <button className='gray-btn'>Near You</button>
        </li>
        <li>
          <button className='gray-btn'>Sports</button>
        </li>
        <li>
          <button className='gray-btn'>News</button>
        </li>
        <li>
          <button className='gray-btn'>Aww</button>
        </li>
      </ul>
    </div>
  )
}
