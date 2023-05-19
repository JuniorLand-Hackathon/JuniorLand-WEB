import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Main from './page/Main';
import Present from './page/Present';
import Education from './page/Education';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/main" element={<Main />} /> */}
                <Route path="/present/:id" element={<Present />} />
                <Route path="/education/:id" element={<Education />} />
            </Routes>
        </Router>
    );
}

export default App;
