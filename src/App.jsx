import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Photos from './components/Photos'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/quiz' element = {<Quiz/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
