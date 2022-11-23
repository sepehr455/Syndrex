import {useState} from "react";

export default function SessionLengthButton(){

    const[number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const decreaseNumber = () => {
        setNumber(number - 1)

    }


    return (
        <div>
            <button onClick={decreaseNumber}>down</button>
            <h2>{number}</h2>
            <button onClick={increaseNumber}>up</button>
        </div>

    )
}