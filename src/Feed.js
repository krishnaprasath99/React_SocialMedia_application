import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
        {Array.isArray(posts) ? (
        posts.map(post => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </>
  )
}

export default Feed