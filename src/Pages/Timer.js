import React, {useState, useEffect, useRef} from 'react'
import GradientButton from "../Components/GradientButton";
import {Button} from "react-bootstrap";


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
    }
    const handleStop = () => {
        setStatus(STATUS.STOPPED)
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
        <div className="App">

            <div style={{padding: 20}}>
                {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                {twoDigits(secondsToDisplay)}
            </div>
            <button onClick={handleStart} type="button" className="timer__buttons">
                Start
            </button>
            <button onClick={handleStop} type="button" className="timer__buttons">
                Stop
            </button>
            <button onClick={handleReset} type="button" className="timer__buttons">
                Reset
            </button>
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
