function HangmanWord() {
    const testWord = "testowanie";

  return (
    <div className="hangman-word">
        {testWord.split("").map((letter, index) => {
            return (
                <span className="hangman-word__letter-border">
                    <span key={index} className="hangman-word__letter hangman-word__letter--hidden">
                        {letter}
                    </span>
                </span>
            )
        })}
    </div>
  )
}

export default HangmanWord