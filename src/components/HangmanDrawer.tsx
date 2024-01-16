const HEAD = (
    <div className="hangman-drawer__head"></div>
)

const BODY = (
    <div className="hangman-drawer__body"></div>
)

const RIGHT_ARM = (
    <div className="hangman-drawer__right-arm"></div>
)

const LEFT_ARM = (
    <div className="hangman-drawer__left-arm"></div>
)

const RIGHT_LEG = (
    <div className="hangman-drawer__right-leg"></div>
)

const LEFT_LEG = (
    <div className="hangman-drawer__left-leg"></div>
)

function HangmanDrawer() {
	return (
        <div className="hangman-drawer">
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div className="hangman-drawer__top"></div>
            <div className="hangman-drawer__top-hang"></div>
            <div className="hangman-drawer__middle"></div>
            <div className="hangman-drawer__bottom"></div>
        </div>
    );
}

export default HangmanDrawer;
