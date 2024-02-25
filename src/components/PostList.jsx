import React, { useContext, useEffect, useState } from 'react'
import Post from "./Post"

import { PostListStore } from '../Store/PostStore'
import WelcomeMsg from './WelcomeMsg'
const PostList = () => {
  const { postList, addPosts } = useContext(PostListStore)

  useEffect(() => {
    const controller=new AbortController();
    const signal=controller.signal;
    fetch('https://dummyjson.com/posts',{signal}).then((res)=>res.json()).then((data)=>{
      addPosts(data.posts)
    })
    return ()=>{
      controller.abort()
    }
  }, [])
  return (

    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((itemPost) => <Post key={itemPost.id} itemPost={itemPost} />)}

    </>
  )
}

export default PostList