import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'

import Homepage from './components/pages/frontend/homepage/Homepage'


const App = () => {
  return (
  
    <Router>
      <Routes>
        <Route index element = {<Homepage/>}/>
      </Routes>
      </Router>

  )
}

export default App
