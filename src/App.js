import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Main from './page/Main';
import Intro from './page/Intro';
import FormPage from './page/Form';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
