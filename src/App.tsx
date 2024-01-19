import { useEffect, useState } from 'react'
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
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  const [goodLetters, setGoodLetters] = useState<string[]>([])

  function addNewLetter(letter: string) {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(currentGuessedLetters => [...currentGuessedLetters, letter])
  }

  function addNewWrongLetter() {
    const newWrongLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    setWrongLetters(newWrongLetters)
  }

  function addNewGoodLetter() {
    const newGoodLetters = guessedLetters.filter(letter => wordToGuess.includes(letter))

    setGoodLetters(newGoodLetters)
  }

  useEffect(() => {
    if (guessedLetters.length > 0) {
      addNewWrongLetter();
      addNewGoodLetter();
    }
  }, [guessedLetters])

  return (
    <>
      <div className='hangman'>
        <HangmanDrawer wrongLettersLength={wrongLetters.length} />
        <HangmanWord wordToGuess={wordToGuess} goodLetters={goodLetters} />
        <Keyboard addNewLetter={addNewLetter} goodLetters={goodLetters} wrongLetters={wrongLetters} />
      </div>
    </>
  )
}

export default App
