import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SIdebar_container from './container/Sidebar_container'
import App_container from './container/App_container'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<App_container/>} >
          <Route path='about' element={null} />
        </Route >
      </Routes>
    </>
  )
}

export default App
