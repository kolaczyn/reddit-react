import React from 'react'
import topCommunitiesData from '../data/topCommunitiesData'
import TopCommunity from './TopCommunity'

export default function TopCommunities() {
  return (
    <div className='content' id='top-communities'>
      <h3>Top Programming Communities</h3>
      <ul id="top-communities-list">
        {topCommunitiesData.map((community, i) => {
          // I have to do it this way, 'cause it seems like JSX doesn't like it when I do it the other way
          let place = { place: i + 1 };
          let props = { ...community, ...place }
          return (<TopCommunity {...props} />)
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
