import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar_container from './container/Sidebar_container'
import App_container from './container/App_container'
import Posts from './components/content/Posts'
import Add from './components/content/Add'
import Post from './components/content/post'


function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<App_container />} >
          <Route path='/' element={<Posts />} />
          <Route path='/add' element={<Add />} />
          <Route path='/blogs/:blogid' element={<Post />} />


        </Route >
      </Routes>
    </>
  )
}

export default App
