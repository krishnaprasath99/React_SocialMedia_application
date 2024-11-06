import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PostLayout = () => {
  return (
    <>
        <Link to = "/postpage/1">Post1</Link>
        <br></br>
        <Link to = "/postpage/2">Post2</Link>
        <br></br>
        <Link to = "/postpage/newpost">NewPost</Link>
        {/* This outlet is used to navigate to the link */}
        <Outlet/>
    </>
  )
}

export default PostLayout