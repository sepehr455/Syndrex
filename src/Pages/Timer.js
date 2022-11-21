import {useEffect, useRef, useState} from "react";
import React from "react";
import {queries} from "@testing-library/react";

const Timer = () => {

    //a hook that will be used to pause the timer
    const [status, setStatus] = React.useState("working");

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');


    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let {total, hours, minutes, seconds}
            = getTimeRemaining(e);
        if (total >= 0) {

            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }

    }

    const clearTimer = (e) => {

        //also edit line 61 if you change this
        setTimer('00:01:10');

        if (Ref.current) clearInterval(Ref.current);

        Ref.current = setInterval(() => {
            startTimer(e);
        }, 1000);
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 70);
        return deadline;
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        if(status === 'working'){
            clearTimer(getDeadTime());
        } else {
            clearTimeout(Ref.current);
        }

    }, [status]);

    const stopTimer = () => {
        setStatus("paused");
    }

    const resume = () => {
        setStatus("working");
    }


    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <div className="App">
            <h2 id="counter">{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
            <button>Start</button>
            <button onClick={stopTimer}>Stop</button>

        </div>
    )
}

export default Timer;