import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { LoginPage, RegisterStudentPage, RegisterTutorPage } from './pages/AuthPages';
import { GenericDashboard, StudentDashboard, TutorDashboard, AdminDashboard } from './pages/DashboardPages';

function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-3">TutorBridge</h1>
      <p className="lead">
        Smart Tutor Hiring Platform – connect students and tutors seamlessly.
      </p>
      <div className="mt-4">
        <button onClick={handleGetStarted} className="btn btn-primary me-2">
          Get Started
        </button>
        <Link to="/register-student" className="btn btn-outline-primary me-2">
          Register as Student
        </Link>
        <Link to="/register-tutor" className="btn btn-outline-secondary">
          Register as Tutor
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TutorBridge
        </Link>
        <div className="d-flex">
          {user ? (
            <>
              <span className="navbar-text me-3">Hi, {user.fullName}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register-student" element={<RegisterStudentPage />} />
        <Route path="/register-tutor" element={<RegisterTutorPage />} />
        <Route
          path="/dashboard"
          element={(
            <ProtectedRoute>
              <GenericDashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/student"
          element={(
            <ProtectedRoute requiredRole="ROLE_STUDENT">
              <StudentDashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/tutor"
          element={(
            <ProtectedRoute requiredRole="ROLE_TUTOR">
              <TutorDashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/admin"
          element={(
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </>
  );
}

