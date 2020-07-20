import React from 'react'
import SortButton from './SortButton'

export default function SortBar() {
  return (
    <div>
      <h3 id='popular-posts-header'>Popular posts</h3>
      <ul className='sort-bar content'>
        <SortButton label={'hot'} icon="hot.png" active={true} />
        <SortButton label={'poland'} active={true} />
        <SortButton label={'new'} icon="new.png" active={false} />
        <SortButton label={'top'} icon="top.png" active={false} />
        <SortButton label={'elipsis'} active={false} />
        <span className="flex-filler"></span>
        <a href='/' className={`btn sort-btn active-sort-true`}>
          <img src='assets/display-icon.png' width='16px' alt='' />
          <p>▼</p>
        </a>
      </ul>
    </div>
  )
}
