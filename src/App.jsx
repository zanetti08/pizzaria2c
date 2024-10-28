import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const [color] = useState("#e4ff88")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default App