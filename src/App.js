import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import TaxForm from './components/TaxForm';
import Submissions from './components/Submissions';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/taxes/:id/form" element={<TaxForm />} />
                <Route path="/taxes/:id/submissions" element={<Submissions />} />
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default App;
