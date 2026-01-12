import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Quiz from './pages/Quiz';

const PrivateRoute = ({ children }) => {
    const user = localStorage.getItem('user');
    return user ? children : <Navigate to="/" />;
};

function App() {
    return (
        <Router>
            <div className="app-container" style={{ minHeight: '100vh', background: 'radial-gradient(circle at top right, #1e293b, #0f172a)' }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } />
                    <Route path="/courses" element={
                        <PrivateRoute>
                            <Courses />
                        </PrivateRoute>
                    } />
                    <Route path="/course/:id" element={
                        <PrivateRoute>
                            <CourseDetail />
                        </PrivateRoute>
                    } />
                    <Route path="/quiz" element={
                        <PrivateRoute>
                            <Quiz />
                        </PrivateRoute>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
