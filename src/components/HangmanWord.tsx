type HangmanWordProps = {
    wordToGuess: string
}

function HangmanWord({ wordToGuess }: HangmanWordProps) {
  return (
    <div className="hangman-word">
        {wordToGuess.split("").map((letter, index) => {
            return (
                <span key={index} className="hangman-word__letter-border">
                    <span className="hangman-word__letter hangman-word__letter--hidden">
                        {letter}
                    </span>
                </span>
            )
        })}
    </div>
  )
}

export default HangmanWord