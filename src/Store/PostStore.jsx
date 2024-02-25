import { createContext, useCallback, useEffect, useReducer } from "react";

// createContext
export const PostListStore = createContext({
      postList: [],
      addPost: () => { },
      deletePost: () => { },
      addPosts:()=>{}
});


const postListReducer = (currentPost, action) => {

      let newPostList = currentPost;
      if (action.type === "Delete_post") {
            newPostList = currentPost.filter((item) => item.id !== action.payload.postId)
      } else if(action.type==="Add_Initial_Post"){
            // newPostList=action.payload.posts;
      }
      else if (action.type === "Add_Post") {
            newPostList = [action.payload, ...currentPost]
      }
      return newPostList
}


// ContextProvider
const PostListProvider = ({ children }) => {
      const [postList, dispathcPostList] = useReducer(postListReducer, [])
      const addPost = (SaveBody, SaveId, SaveContent, SaveTitle, SaveReactions) => {
            dispathcPostList({
                  type: "Add_Post",
                  payload: {
                        id: Date.now(),
                        title: SaveTitle,
                        body: SaveContent,
                        reactions: SaveReactions,
                        userId: SaveId,
                        tags: [SaveBody]
                  }
            })
      }
      const addPosts = (posts) => {
            dispathcPostList({
                  type: "Add_Initial_Post",
                  payload: {
                        posts
                  }
            })
      }
      const deletePost = useCallback((postId) => {
            dispathcPostList({
                  type: "Delete_post",
                  payload: {
                        postId
                  }
            })
      },[dispathcPostList])
      // useEffect(

      //       new Promise((resolve, reject) => {
      //             const link = "forjson.JSON";
      //             let xhr = new XMLHttpRequest();
      //             xhr.open("GET", link);
      //             xhr.onload = () => {
      //                   if (xhr.readyState === 4) {
      //                         const data = JSON.parse(xhr.response);
      //                         setTimeout(() => {
      //                               resolve(data)
      //                         }, 2000)
      //                   }
      //             }
      //             xhr.send();
      //       })
      // )
      return (
            <PostListStore.Provider value={{
                  postList,
                  addPost,
                  deletePost,
                  addPosts
            }}>
                  {children}
            </PostListStore.Provider>
      )
}
export default PostListProvider

