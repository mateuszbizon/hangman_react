import { useState } from 'react'
import './sass/app.scss'
import HangmanDrawer from './components/HangmanDrawer'
import HangmanWord from './components/HangmanWord'

function App() {

  return (
    <>
      <div className='hangman'>
        <HangmanDrawer />
        <HangmanWord />
      </div>
    </>
  )
}

export default App
