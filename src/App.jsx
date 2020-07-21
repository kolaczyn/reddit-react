import React from 'react'
import Navbar from './headers/Navbar'
import TrendingToday from './headers/TrendingToday'
import Main from './Main'
import Aside from './Aside'

function App() {
  return (
    <>
      <Navbar />
      <TrendingToday />
      <div className='main-section-and-sidebar'>
        <Main />
        <Aside />
      </div>
    </>
  )
}

export default App
