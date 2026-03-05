import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function GenericDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isStudent = user?.roles?.includes('ROLE_STUDENT');
  const isTutor = user?.roles?.includes('ROLE_TUTOR');
  const isAdmin = user?.roles?.includes('ROLE_ADMIN');

  useEffect(() => {
    if (isStudent) {
      navigate('/student', { replace: true });
    } else if (isTutor) {
      navigate('/tutor', { replace: true });
    } else if (isAdmin) {
      navigate('/admin', { replace: true });
    }
  }, [isStudent, isTutor, isAdmin, navigate]);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p className="lead">Welcome, {user?.fullName}</p>
      <p className="text-muted">
        Redirecting you to your role-specific dashboard...
      </p>
    </div>
  );
}

export function StudentDashboard() {
  const { user } = useAuth();
  return (
    <div className="container mt-5">
      <h2>Student Dashboard</h2>
      <p className="lead">Welcome, {user?.fullName}</p>
      <p className="text-muted">
        Here you will be able to search tutors, manage bookings, and save favorites.
      </p>
    </div>
  );
}

export function TutorDashboard() {
  const { user } = useAuth();
  return (
    <div className="container mt-5">
      <h2>Tutor Dashboard</h2>
      <p className="lead">Welcome, {user?.fullName}</p>
      <p className="text-muted">
        Here you will be able to manage your profile, availability, and upcoming sessions.
      </p>
    </div>
  );
}

export function AdminDashboard() {
  const { user } = useAuth();
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <p className="lead">Welcome, {user?.fullName}</p>
      <p className="text-muted">
        Here you will be able to approve tutors, manage users, and view platform analytics.
      </p>
    </div>
  );
}

