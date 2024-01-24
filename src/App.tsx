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
  const [isWin, setIsWin] = useState<boolean>(false);
  const [isLose, setIsLose] = useState<boolean>(false);
  const [reveal, setReveal] = useState<boolean>(false);
  const [isKeyboardDisabled, setIsKeyboardDisabled] = useState<boolean>(false);
  const amountOfAttempts = 6;

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

  function checkGameOver() {
    if (wrongLetters.length >= amountOfAttempts) {
      setIsLose(true);
      setIsKeyboardDisabled(true);
      setReveal(true);
      return;
    }

    if (wordToGuess.split("").every(letter => goodLetters.includes(letter))) {
      setIsWin(true);
      setIsKeyboardDisabled(true);
      return;
    }
  }

  useEffect(() => {
    if (guessedLetters.length > 0) {
      addNewWrongLetter();
      addNewGoodLetter();
    }
  }, [guessedLetters])

  useEffect(() => {
    if (wrongLetters.length > 0 || goodLetters.length > 0) {
      checkGameOver();
    }
  }, [wrongLetters, goodLetters])

  return (
    <>
      <div className='hangman'>
        <HangmanDrawer wrongLettersLength={wrongLetters.length} />
        <HangmanWord wordToGuess={wordToGuess} goodLetters={goodLetters} reveal={reveal} />
        <Keyboard addNewLetter={addNewLetter} goodLetters={goodLetters} wrongLetters={wrongLetters} disabled={isKeyboardDisabled} />
      </div>
    </>
  )
}

export default App
