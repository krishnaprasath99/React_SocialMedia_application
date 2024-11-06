import {createContext, useState,useEffect } from "react"
import {format} from 'date-fns'
import api from "../api/posts"
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({})



export const DataProvider = ({children}) => {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter((post) => 
     ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
     ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse());
  },[posts, search])

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts')
        setPosts(response.data)
      }
      catch(err){
        if(err.response) {
          console.log(err.response.data)
        }
        else {
          console.log(err.message)
        }
      }
    }
    fetchPosts();
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const id =  posts.length?String(Number(posts[posts.length-1].id)+1):"1"
    const datetime = format(new Date(), 'MMMM dd, yyyypp') 
    const newPost = {id, title:postTitle, datetime, body:postBody}
    try{
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts);
      setPostTitle('')
      setPostBody('')
      navigate('/')
    }
    catch(err){
        console.log(err.message)
    }
  }

  const handleEdit = async (id) =>{
    const datetime = format(new Date(), 'MMMM dd, yyyypp') 
    const updatedPost = {id, title:editTitle, datetime, body:editBody}
    try{
      const response = await api.put(`/posts/${id}`, updatedPost)
      setPosts(posts.map(post => post.id === id ? {...response.data}:post));
      setEditTitle('')
      setEditBody('')
      navigate('/')
    }
    catch(err){
      console.log(err.message)
    }
  }

  const handleDelete = async (id) =>{
    try{
      const response = await api.delete(`/posts/${id}`)
      const postsList = posts.filter(post => post.id!==id)
      setPosts(postsList)
      navigate('/')
    }
    catch(err){
      console.log(err.message)
    }
  }
    return (
        <DataContext.Provider value ={{
            search,setSearch, searchResults,handleSubmit, postTitle,setPostTitle,postBody, setPostBody,posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle,handleDelete
        }}>
            {children}

        </DataContext.Provider>
    )
}

export default DataContext

