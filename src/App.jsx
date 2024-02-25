import React, { useContext, useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider, {PostListStore} from './Store/PostStore'

const App = () => {
  const [showCreatePost, setShowCreatePost]=useState(true)
const {Data}=useContext(PostListStore)

  return (
    <PostListProvider>
      <div className="flexx">
      <SideBar setShowCreatePost={setShowCreatePost}
      showCreatePost={showCreatePost}/>
      <div className="content">
      <Header/>
      {showCreatePost  ? <CreatePost/>:<PostList />}
      <Footer/>
      </div>
      </div>
    </PostListProvider>
  )
}

export default App