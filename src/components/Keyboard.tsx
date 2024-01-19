import keys from "../data/keys.json";

type KeyboardProps = {
	addNewLetter: (letter: string) => void;
	goodLetters: string[];
	wrongLetters: string[];
};

function Keyboard({ addNewLetter, goodLetters, wrongLetters }: KeyboardProps) {
	return (
		<div className='keyboard'>
			{keys.map((key, index) => {
				const isActiveLetter = goodLetters.includes(key);
				const isInactiveLetter = wrongLetters.includes(key);

				return (
					<button
						key={index}
						className={`keyboard__button ${isActiveLetter ? "keyboard__button--active" : ""} ${isInactiveLetter ? "keyboard__button--inactive" : ""}`}
						onClick={() => addNewLetter(key)}
            disabled={isActiveLetter || isInactiveLetter}>
						{key}
					</button>
				);
			})}
		</div>
	);
}

export default Keyboard;
