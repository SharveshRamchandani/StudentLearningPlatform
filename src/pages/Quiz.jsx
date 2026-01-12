import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        question: "What is React?",
        options: ["A Database", "A JavaScript Library", "A Server", "An OS"],
        answer: 1
    },
    {
        question: "Which hook is used for side effects?",
        options: ["useState", "useContext", "useEffect", "useReducer"],
        answer: 2
    },
    {
        question: "What is JSX?",
        options: ["Java XML", "JavaScript XML", "JSON XML", "Java Syntax"],
        answer: 1
    },
    {
        question: "Which method creates a new array with results of calling a function on every element?",
        options: ["filter", "reduce", "map", "forEach"],
        answer: 2
    }
];

const Quiz = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (idx) => {
        if (idx === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 4rem)' }}>
            <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                {showScore ? (
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--success)' }}>Quiz Complete!</h2>
                        <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                            You scored <span style={{ fontWeight: 'bold' }}>{score}</span> out of <span style={{ fontWeight: 'bold' }}>{questions.length}</span>
                        </div>
                        <div style={{ width: '100%', height: '10px', background: 'var(--bg-secondary)', borderRadius: '5px', overflow: 'hidden', marginBottom: '2rem' }}>
                            <div style={{ width: `${(score / questions.length) * 100}%`, height: '100%', background: score > questions.length / 2 ? 'var(--success)' : 'var(--danger)' }}></div>
                        </div>
                        <button className="btn-primary" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
                    </div>
                ) : (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Exit</button>
                            <span>Question {currentQuestion + 1}/{questions.length}</span>
                        </div>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', lineHeight: 1.4 }}>{questions[currentQuestion].question}</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {questions[currentQuestion].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    style={{
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        color: 'var(--text-primary)',
                                        fontSize: '1.1rem'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}
                                    onClick={() => handleAnswer(idx)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
