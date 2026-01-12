import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [timer, setTimer] = useState(25 * 60); // 25 min Pomodoro
    const [isActive, setIsActive] = useState(false);
    const [note, setNote] = useState('');
    const [activeModule, setActiveModule] = useState(0);

    // Load note from storage
    useEffect(() => {
        const savedNote = localStorage.getItem(`note-${id}`);
        if (savedNote) setNote(savedNote);
    }, [id]);

    const saveNote = (e) => {
        const val = e.target.value;
        setNote(val);
        localStorage.setItem(`note-${id}`, val);
    };

    // Timer logic
    useEffect(() => {
        let interval = null;
        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(curr => curr - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsActive(false);
            // In a real app, play a sound
            alert("Session Complete!");
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const modules = [
        { title: 'Module 1: Getting Started', content: 'Welcome to the course. In this module, we will cover the foundational concepts necessary to understand the subject matter. Start by setting up your environment.' },
        { title: 'Module 2: Core Concepts', content: 'Here we dive into the core mechanisms. You will learn about key variables, control structures (loops, if-statements), and basic data types.' },
        { title: 'Module 3: Advanced Topics', content: 'This module covers advanced topics such as asynchronous handling, closures, and performance optimization techniques.' },
        { title: 'Module 4: Final Project', content: 'Apply what you have learned to build a comprehensive project. Follow the prompt and submit your work for review.' },
    ];

    return (
        <div style={{ padding: '2rem', height: 'calc(100vh - 4rem)', display: 'grid', gridTemplateColumns: 'minmax(200px, 250px) 1fr minmax(250px, 300px)', gap: '2rem' }}>
            {/* Sidebar: Modules */}
            <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => navigate('/courses')} style={{ marginBottom: '1rem', background: 'none', border: 'none', color: 'var(--text-secondary)', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>←</span> Back to Courses
                </button>
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', color: 'var(--accent-primary)' }}>Modules</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {modules.map((m, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveModule(idx)}
                            style={{
                                padding: '0.75rem',
                                textAlign: 'left',
                                background: activeModule === idx ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                                color: activeModule === idx ? '#fff' : 'var(--text-primary)',
                                border: 'none',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: activeModule === idx ? '600' : 'normal',
                                transition: 'all 0.2s'
                            }}
                        >
                            {m.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="glass-panel" style={{ padding: '3rem', overflowY: 'auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{modules[activeModule].title}</h2>
                <div style={{ lineHeight: '1.8', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                    <p>{modules[activeModule].content}</p>
                    <hr style={{ margin: '2rem 0', borderColor: 'rgba(255,255,255,0.1)' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Takeaways</h3>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Understanding the basics</li>
                        <li>Practice with examples</li>
                        <li>Apply to real-world scenarios</li>
                    </ul>
                </div>
            </div>

            {/* Right Panel: Tools */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Timer */}
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--accent-secondary)' }}>Study Timer</h3>
                    <div style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '1rem', color: timer < 60 ? 'var(--danger)' : 'white' }}>
                        {formatTime(timer)}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button className="btn-primary" onClick={() => setIsActive(!isActive)}>
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                        <button onClick={() => { setIsActive(false); setTimer(25 * 60); }} style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '0.5rem', color: 'white', cursor: 'pointer' }}>
                            Reset
                        </button>
                    </div>
                </div>

                {/* Notes */}
                <div className="glass-panel" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--accent-primary)' }}>My Notes</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Auto-saved to storage</p>
                    <textarea
                        className="input-field"
                        style={{ flex: 1, resize: 'none', background: 'rgba(0,0,0,0.2)', fontFamily: 'monospace' }}
                        placeholder="Type key concepts here..."
                        value={note}
                        onChange={saveNote}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
