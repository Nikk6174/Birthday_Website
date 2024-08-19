import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div className='mainContainer'>
      <div className="boxMsg ">
        <h1 className="msg1
        font-bold text-5xl">Happy Birthday</h1>
        <h1 className="msg2 font-semibold text-5xl">Sidhesh Tavare</h1>
      </div>

      <div className="interaction flex space-x-40 mt-40 justify-center items-center">
        <NavLink to="/quiz" className="quiz-container border-2 border-black p-5 w-44 h-24 flex justify-center items-center rounded-3xl">
          quiz
        </NavLink>

      </div>
    </div>
  )
}

export default Home
