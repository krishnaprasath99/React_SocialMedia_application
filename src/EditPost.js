import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {
    const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle} = useContext(DataContext)
    const {id}=useParams();
    const post = posts.find(post => (post.id).toString()===id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])

    return (
        <main className='NewPost'>
        {editTitle &&
        <>        
          <h2>New Post</h2>
          <form className='editPostForm' 
            onSubmit={ (e)=>{
                e.preventDefault()
                handleEdit(post.id)}
            }>
            <label htmlFor='postTitle'>Title:</label>
            <input
              id = "editTitle"
              type = "text"
              required 
              value={editTitle}
              onChange={(e)=>setEditTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post</label>
            <textarea
              id = "editBody"
              required
              value={editBody}
              onChange={(e) =>setEditBody(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </> } 
        
        </main>
    
      )
}

export default EditPost