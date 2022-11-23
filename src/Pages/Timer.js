import React, {useState, useEffect, useRef} from 'react'
import SessionLengthButton from "../Components/SessionLength";

const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
}

const INITIAL_COUNT = 120

export default function Timer() {
    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STOPPED)

    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

    const handleStart = () => {
        setStatus(STATUS.STARTED)
        document.querySelector('.start-button').setAttribute("disabled", "true")
        document.querySelector('.stop-button').removeAttribute("disabled")
    }
    const handleStop = () => {
        setStatus(STATUS.STOPPED)
        if (!!document.querySelector('#counter')){
            document.querySelector('#counter').remove()
        }
        document.querySelector('.stop-button').setAttribute("disabled", "true")
        document.querySelector('.start-button').removeAttribute("disabled")
        document.querySelector('.pause-button').remove()
    }
    const handleReset = () => {
        setStatus(STATUS.STOPPED)
        setSecondsRemaining(INITIAL_COUNT)
    }
    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                setStatus(STATUS.STOPPED)
            }
        },
        status === STATUS.STARTED ? 1000 : null,
        // passing null stops the interval
    )
    return (
        <div className="timer_div">

            <div className= "timer_nums counter">
                {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                {twoDigits(secondsToDisplay)}
            </div>
            <div>
                <SessionLengthButton />
            </div>
            <button onClick={handleStart} type="button" className="timer__buttons start-button">
                Start
            </button>
            <button onClick={handleStop} type="button" className="timer__buttons stop-button">
                Stop
            </button>
            <button onClick={handleReset} type="button" className="timer__buttons">
                Reset
            </button>
            <div className= "bottom_div">
                <button onClick={handleReset} type="button" className="choose_timer">
                    Change time
                </button>
            </div>

        </div>

    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

const twoDigits = (num) => String(num).padStart(2, '0')
