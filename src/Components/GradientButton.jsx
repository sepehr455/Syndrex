import {useNavigate} from 'react-router-dom';

const buttons = [
    "button_one",
    "button_two",
    "button_three"
]



const GradientButton = () =>{

    let navigate = useNavigate();

    return (
        <div>
            {buttons.map((s) => <button className ="btn-grad" onClick = { () => navigate('/timer')}>{s}</button>)}
        </div>
    );
}

export default GradientButton;