type InfoModalProps = {
    isWin: boolean,
    isLose: boolean,
    isInfoModalActive: boolean,
    restartGame: () => void,
}

function InfoModal({ isWin, isLose, isInfoModalActive, restartGame }: InfoModalProps) {
  return (
    <>    
        <div className={isInfoModalActive ? "shadow shadow-show" : "shadow"}></div>
        <div className={isInfoModalActive ? "info-modal info-modal-show" : "info-modal"}>
            {isWin && "Gratulację! Odgadłeś hasło."}
            {isLose && "Niestety nie udało się. Spróbuj ponownie."}
            <button className="info-modal__close-btn" onClick={restartGame}>
                Zagraj ponownie
            </button>
        </div>
    </>
  )
}

export default InfoModal