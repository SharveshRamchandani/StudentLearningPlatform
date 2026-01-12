# Student Learning Portal - Implementation Plan

## Goal
Build a mini Learning Management System (LMS) with a premium, dynamic user interface.

## Features
1.  **Authentication**: Login/Register (simulated or minimal backend).
2.  **Dashboard**: User profile, progress tracking, announcements.
3.  **Course Management**: List of courses, enroll, view modules.
4.  **Modules & Notes**: Content delivery, taking notes.
5.  **Quiz System**: Assessment capability.
6.  **Timers**: Study timers / Pomodoro.
7.  **Fetch API**: Fetching data (mocked or external).
8.  **Storage**: Persisting state.

## Tech Stack
-   **Framework**: React (Vite)
-   **Styling**: Vanilla CSS (CSS Variables, Grid/Flexbox) for "Rich Aesthetics", Glassmorphism.
-   **Structure**:
    -   `src/components`: Reusable UI components (Card, Button, Input, Navbar).
    -   `src/pages`: Login, Dashboard, Courses, Quiz, Profile.
    -   `src/context`: InfoStore (Global state).
    -   `src/utils`: Mock API / Storage helpers.

## Design
-   **Theme**: Dark mode, Glassmorphism (blur effects), Vibrant accents (Neon/Pastel).
-   **Animations**: Framer Motion or CSS Transitions.

## Steps
1.  **Setup**: Initialize React project.
2.  **Base Styles**: `index.css` with variables and reset.
3.  **Components**: Build Layout, Navbar, Cards.
4.  **Pages**: Implement core pages.
5.  **Logic**: Connect state and "Fetch" logic.
