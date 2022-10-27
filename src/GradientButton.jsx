import {Routes, Route, useNavigate} from 'react-router-dom';

const buttons = [
    "button_one",
    "button_two",
    "button_three"
]



const GradientButton = () =>{
    return (
        <div>
            {buttons.map((s) => <button className ="btn-grad">{s}</button>)}
        </div>
    );
}

export default GradientButton;