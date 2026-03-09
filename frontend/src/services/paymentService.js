import api from './api';

export const paymentService = {
  processPayment: async (paymentData) => {
    const response = await api.post('/payments/process', paymentData);
    return response.data;
  },

  getPaymentMethods: async () => {
    const response = await api.get('/payments/methods');
    return response.data;
  },

  addPaymentMethod: async (methodData) => {
    const response = await api.post('/payments/methods', methodData);
    return response.data;
  },

  removePaymentMethod: async (methodId) => {
    const response = await api.delete(`/payments/methods/${methodId}`);
    return response.data;
  },

  getPaymentHistory: async (page = 1, filters = {}) => {
    const response = await api.get('/payments/history', { params: { page, ...filters } });
    return response.data;
  },

  getTransactionById: async (id) => {
    const response = await api.get(`/payments/${id}`);
    return response.data;
  },

  refundPayment: async (paymentId, reason) => {
    const response = await api.post(`/payments/${paymentId}/refund`, { reason });
    return response.data;
  },

  getPaymentStats: async (period = 'month') => {
    const response = await api.get('/payments/stats', { params: { period } });
    return response.data;
  },

  withdrawEarnings: async (amount) => {
    const response = await api.post('/payments/withdraw', { amount });
    return response.data;
  },

  getWithdrawalHistory: async () => {
    const response = await api.get('/payments/withdrawals');
    return response.data;
  },

  verifyPayment: async (paymentId) => {
    const response = await api.post(`/payments/${paymentId}/verify`);
    return response.data;
  },

  createPaymentIntent: async (bookingId) => {
    const response = await api.post('/payments/create-intent', { bookingId });
    return response.data;
  },
};
