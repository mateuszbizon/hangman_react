type InfoModalProps = {
    isWin: boolean,
    isLose: boolean,
    isInfoModalActive: boolean,
}

function InfoModal({ isWin, isLose, isInfoModalActive }: InfoModalProps) {
  return (
    <>    
        <div className={isInfoModalActive ? "shadow shadow-show" : "shadow"}></div>
        <div className={isInfoModalActive ? "info-modal info-modal-show" : "info-modal"}>
            {isWin && "Gratulację! Odgadłeś hasło."}
            {isLose && "Niestety nie udało się. Spróbuj ponownie."}
            <button className="info-modal__close-btn">
                Zagraj ponownie
            </button>
        </div>
    </>
  )
}

export default InfoModal