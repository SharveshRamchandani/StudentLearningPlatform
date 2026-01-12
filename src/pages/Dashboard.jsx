import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Trophy, Clock, Activity } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{"name": "Student"}');

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Welcome back, {user.name}</p>
                </div>
                <button className="btn-primary" onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/');
                }}>Logout</button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {/* Progress */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <Activity size={24} color="var(--accent-primary)" />
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', margin: 0 }}>Your Progress</h3>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Web Development</span>
                            <span>75%</span>
                        </div>
                        <div style={{ height: '8px', background: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: '75%', background: 'var(--accent-gradient)' }}></div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>Data Science</span>
                            <span>30%</span>
                        </div>
                        <div style={{ height: '8px', background: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: '30%', background: 'var(--success)' }}></div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <BookOpen size={24} color="var(--accent-secondary)" />
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-secondary)', margin: 0 }}>Quick Actions</h3>
                    </div>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <button className="btn-primary" onClick={() => navigate('/courses')} style={{ width: '100%' }}>Continue Learning</button>
                        <button className="btn-primary" onClick={() => navigate('/quiz')} style={{ width: '100%', background: 'transparent', border: '1px solid var(--accent-primary)' }}>Take a Quiz</button>
                    </div>
                </div>

                {/* Stats */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <Clock size={24} color="#f59e0b" />
                        <h3 style={{ fontSize: '1.25rem', color: '#f59e0b', margin: 0 }}>Study Stats</h3>
                    </div>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>12h</div>
                    <p style={{ color: 'var(--text-secondary)' }}>Time spent this week</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
