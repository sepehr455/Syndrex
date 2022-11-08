export default function Timer() {
    return (
        <div className="timer">
            <span className="timer__part timer__part--minutes">00</span>
            <span className="timer__part">:</span>
            <span className="timer__part timer__part--seconds">00</span>
            <button type={"button"} className="timer__btn timer__btn--control timer__button--start">
                <span className="material-icons">play_arrow</span>
            </button>
            <button type={"button"} className="timer__btn timer__btn--reset">
                <span className="material-icons">timer</span>
            </button>
        </div>
    )
}