import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={null} >
          <Route path='about' element={null} />
        </Route >
      </Routes>
    </>
  )
}

export default App
