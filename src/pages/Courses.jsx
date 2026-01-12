import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate Fetch API
        const fetchCourses = async () => {
            // In a real app, strict fetch call here
            // const response = await fetch('/api/courses');
            // const data = await response.json();

            setTimeout(() => {
                setCourses([
                    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React ecosystem.', modules: 12 },
                    { id: 2, title: 'Advanced CSS', description: 'Master Grid, Flexbox and Animations.', modules: 8 },
                    { id: 3, title: 'Node.js Backend', description: 'Build scalable APIs with Node.', modules: 15 },
                    { id: 4, title: 'Data Algorithms', description: 'Python for data structures.', modules: 10 },
                ]);
                setLoading(false);
            }, 800);
        };

        fetchCourses();
    }, []);

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.5rem' }}>←</button>
                <h1 style={{ fontSize: '2rem', margin: 0 }}>Available Courses</h1>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '4rem' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⟳</div>
                    Loading courses...
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {courses.map(course => (
                        <div key={course.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{course.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{course.description}</p>
                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>{course.modules} Modules</span>
                                <button className="btn-primary" onClick={() => navigate(`/course/${course.id}`)}>
                                    Start Learning
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Courses;
