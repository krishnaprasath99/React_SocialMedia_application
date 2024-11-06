import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <main className='Home'>
      {postMessage.length ? (
        <Feed posts={searchResults}/>
      ):(<p>No posts to Display.!!</p>)
      }
    </main>
  )
}

export default Home