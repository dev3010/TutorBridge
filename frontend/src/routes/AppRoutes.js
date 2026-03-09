import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Public Pages
import HomePage from '../pages/Public/HomePage';
import LoginPage from '../pages/Public/LoginPage';
import RegisterPage from '../pages/Public/RegisterPage';
import ForgotPasswordPage from '../pages/Public/ForgotPasswordPage';
import ResetPasswordPage from '../pages/Public/ResetPasswordPage';
import VerifyEmailPage from '../pages/Public/VerifyEmailPage';
import TutorSearchPage from '../pages/Public/TutorSearchPage';
import TutorProfilePage from '../pages/Public/TutorProfilePage';
import AboutPage from '../pages/Public/AboutPage';
import ContactPage from '../pages/Public/ContactPage';

// Student Pages
import StudentDashboard from '../pages/Student/StudentDashboard';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/tutor-search" element={<TutorSearchPage />} />
      <Route path="/tutor/:id" element={<TutorProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Student Routes */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
