import api from './api';

export const bookingService = {
  createBooking: async (bookingData) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  getStudentBookings: async (status = 'all', page = 1) => {
    const response = await api.get('/bookings/student', { params: { status, page } });
    return response.data;
  },

  getTutorBookings: async (status = 'all', page = 1) => {
    const response = await api.get('/bookings/tutor', { params: { status, page } });
    return response.data;
  },

  getBookingById: async (id) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  updateBookingStatus: async (id, status) => {
    const response = await api.put(`/bookings/${id}/status`, { status });
    return response.data;
  },

  cancelBooking: async (id, reason) => {
    const response = await api.put(`/bookings/${id}/cancel`, { reason });
    return response.data;
  },

  rescheduleBooking: async (id, newDateTime) => {
    const response = await api.put(`/bookings/${id}/reschedule`, { newDateTime });
    return response.data;
  },

  getAvailableSlots: async (tutorId, date) => {
    const response = await api.get(`/bookings/available-slots`, { params: { tutorId, date } });
    return response.data;
  },

  confirmBooking: async (id) => {
    const response = await api.put(`/bookings/${id}/confirm`);
    return response.data;
  },

  completeBooking: async (id, notes) => {
    const response = await api.put(`/bookings/${id}/complete`, { notes });
    return response.data;
  },

  getBookingHistory: async (period = 'all', page = 1) => {
    const response = await api.get('/bookings/history', { params: { period, page } });
    return response.data;
  },

  getUpcomingBookings: async () => {
    const response = await api.get('/bookings/upcoming');
    return response.data;
  },

  getBookingStats: async () => {
    const response = await api.get('/bookings/stats');
    return response.data;
  },
};
