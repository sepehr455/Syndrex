import {useNavigate} from 'react-router-dom';


const GradientButton = () => {

    let navigate = useNavigate();

    return (
        <div className="App-header">
            {/*timer button*/}
            <button className="btn-grad" onClick={() => navigate('/timer')}>Timer</button>

            {/*other buttons*/}
            <button className="btn-grad" >Button 2</button>
            <button className="btn-grad" >Button 3</button>
        </div>
    );
}

export default GradientButton;