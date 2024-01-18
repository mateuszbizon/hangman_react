import keys from "../data/keys.json";

type KeyboardProps = {
    addNewLetter: (letter: string) => void,
}

function Keyboard({ addNewLetter }: KeyboardProps) {
  return (
    <div className="keyboard">
        {keys.map((key, index) => {
            return (
                <button key={index} className="keyboard__button" onClick={() => addNewLetter(key)}>{key}</button>
            )
        })}
    </div>
  )
}

export default Keyboard