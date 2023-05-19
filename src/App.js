import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NotFound from './NotFound';
import FormPage from './page/Form';
import Intro from './page/Intro';
import Main from './page/Main';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/main" element={<Main />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
