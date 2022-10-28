import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomeScreen from "./Pages/Home";
import {Timer} from "./Pages/Timer";

function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<HomeScreen/>} />
                <Route path= "/timer" element={<Timer />}/>
            </Routes>
        </Router>

    );
}

export default App;
