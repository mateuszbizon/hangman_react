import { useState } from 'react'
import './sass/app.scss'
import HangmanDrawer from './components/HangmanDrawer'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from "./data/words.json";

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => getRandomWord());

  return (
    <>
      <div className='hangman'>
        <HangmanDrawer />
        <HangmanWord wordToGuess={wordToGuess} />
        <Keyboard />
      </div>
    </>
  )
}

export default App
