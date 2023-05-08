import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Universities from './Universities/Universities';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/universities" element={<Universities />} />
            </Routes>
        </Router>
    );
}

export default App;
