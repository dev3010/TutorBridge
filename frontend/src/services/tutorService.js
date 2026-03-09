import api from './api';

export const tutorService = {
  getAllTutors: async (filters = {}) => {
    const response = await api.get('/tutors', { params: filters });
    return response.data;
  },

  getTutorById: async (id) => {
    const response = await api.get(`/tutors/${id}`);
    return response.data;
  },

  getTutorProfile: async () => {
    const response = await api.get('/tutors/profile');
    return response.data;
  },

  updateTutorProfile: async (profileData) => {
    const response = await api.put('/tutors/profile', profileData);
    return response.data;
  },

  registerAsTutor: async (tutorData) => {
    const response = await api.post('/tutors/register', tutorData);
    return response.data;
  },

  getTutorSubjects: async () => {
    const response = await api.get('/tutors/subjects');
    return response.data;
  },

  addSubject: async (subjectData) => {
    const response = await api.post('/tutors/subjects', subjectData);
    return response.data;
  },

  removeSubject: async (subjectId) => {
    const response = await api.delete(`/tutors/subjects/${subjectId}`);
    return response.data;
  },

  getAvailability: async (tutorId) => {
    const response = await api.get(`/tutors/${tutorId}/availability`);
    return response.data;
  },

  setAvailability: async (availabilityData) => {
    const response = await api.post('/tutors/availability', availabilityData);
    return response.data;
  },

  getTutorReviews: async (tutorId, page = 1) => {
    const response = await api.get(`/tutors/${tutorId}/reviews`, { params: { page } });
    return response.data;
  },

  getTutorStats: async () => {
    const response = await api.get('/tutors/stats');
    return response.data;
  },

  getTutorEarnings: async (period = 'month') => {
    const response = await api.get('/tutors/earnings', { params: { period } });
    return response.data;
  },

  approveTutor: async (tutorId) => {
    const response = await api.put(`/admin/tutors/${tutorId}/approve`);
    return response.data;
  },

  rejectTutor: async (tutorId, reason) => {
    const response = await api.put(`/admin/tutors/${tutorId}/reject`, { reason });
    return response.data;
  },
};
