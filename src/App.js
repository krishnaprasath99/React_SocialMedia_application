import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import NewPost from './NewPost';
import Nav from './Nav';
import PostPage from './PostPage';
import Post from './Post';
import { Routes, Route, Link, useActionData, Navigate, useNavigate } from 'react-router-dom';
import PostLayout from './PostLayout';

import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';

function App() {

  

  return (
    <div className="App">
        <DataProvider>
      <Header title="SocialMedia"/>
      <Nav/>
      <Routes>
        <Route path='/' element ={
          <Home/>
        }/>
        <Route path='post'> 
          <Route index element = {
            <NewPost/>}
          />
          {/* <PostPage/> */}
          
          <Route path=":id" element={
            <PostPage/>
          }/>
        </Route>

        <Route path="/edit/:id" element={
            <EditPost/>
          }/>
        <Route path='about' element = {<About/>}/>
        <Route path = '*' element={<Missing/>}/>
      </Routes>
      <Footer/>
    </DataProvider>
    </div>
  );
}

export default App;
