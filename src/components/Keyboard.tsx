import keys from "../data/keys.json";

function Keyboard() {
  return (
    <div className="keyboard">
        {keys.map((key, index) => {
            return (
                <button key={index} className="keyboard__button">{key}</button>
            )
        })}
    </div>
  )
}

export default Keyboard