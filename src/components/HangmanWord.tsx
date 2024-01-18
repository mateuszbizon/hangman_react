type HangmanWordProps = {
    wordToGuess: string,
    goodLetters: string[]
}

function HangmanWord({ wordToGuess, goodLetters }: HangmanWordProps) {
  return (
    <div className="hangman-word">
        {wordToGuess.split("").map((letter, index) => {
            const isGuessedLetter = goodLetters.includes(letter);

            return (
                <span key={index} className="hangman-word__letter-border">
                    <span className={isGuessedLetter ? "hangman-word__letter" : "hangman-word__letter hangman-word__letter--hidden"}>
                        {letter}
                    </span>
                </span>
            )
        })}
    </div>
  )
}

export default HangmanWord