import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Attach JWT token from localStorage to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor for error normalization
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Something went wrong. Please check your network connection.';
    return Promise.reject({ ...error, message });
  }
);

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data)
};

export const parvaService = {
  getAllParvas: () => api.get('/parvas'),
  getParvaById: (id) => api.get(`/parvas/${id}`),
  createParva: (data) => api.post('/parvas', data),
  updateParva: (id, data) => api.put(`/parvas/${id}`, data),
  deleteParva: (id) => api.delete(`/parvas/${id}`),
  getParvaQuestions: (id) => api.get(`/parvas/${id}/questions`),
  getParvaVideos: (id) => api.get(`/parvas/${id}/videos`)
};

export const quizService = {
  startQuiz: (data) => api.post('/quiz/start', data),
  submitQuiz: (data) => api.post('/quiz/submit', data),
  getHistory: () => api.get('/quiz/history'),
  getRandomQuiz: (count = 10) => api.get(`/quiz/random?count=${count}`),
  getFinalChallenge: () => api.get('/quiz/final-challenge')
};

export const progressService = {
  getProgress: () => api.get('/progress'),
  resetProgress: () => api.put('/progress', { action: 'reset' })
};

export const leaderboardService = {
  getLeaderboard: () => api.get('/leaderboard')
};

export const videoService = {
  getAllVideos: () => api.get('/videos'),
  createVideo: (data) => api.post('/videos', data),
  updateVideo: (id, data) => api.put(`/videos/${id}`, data),
  deleteVideo: (id) => api.delete(`/videos/${id}`)
};

export const questionService = {
  getAllQuestions: (params) => api.get('/questions', { params }),
  createQuestion: (data) => api.post('/questions', data),
  updateQuestion: (id, data) => api.put(`/questions/${id}`, data),
  deleteQuestion: (id) => api.delete(`/questions/${id}`)
};

export const adminService = {
  getStats: () => api.get('/admin/stats'),
  getUsers: () => api.get('/admin/users'),
  updateUserRole: (id, role) => api.put(`/admin/users/${id}/role`, { role }),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
  getAchievements: () => api.get('/admin/achievements')
};

export default api;
