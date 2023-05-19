import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './page/Main';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
