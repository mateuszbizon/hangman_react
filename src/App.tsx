import { useState } from 'react'
import './sass/app.scss'
import HangmanDrawer from './components/HangmanDrawer'

function App() {

  return (
    <>
      <div className='hangman'>
        <HangmanDrawer />
      </div>
    </>
  )
}

export default App
