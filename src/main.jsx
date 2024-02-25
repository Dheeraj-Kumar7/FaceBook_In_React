import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
<Route path='home' element={<CreatePost/>}/>
<Route path='postlist' element={<PostList/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
