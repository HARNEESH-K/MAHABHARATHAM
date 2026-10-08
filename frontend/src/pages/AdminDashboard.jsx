import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { adminService, questionService, videoService, parvaService } from '../services/api';
import {
  Shield,
  Users,
  HelpCircle,
  Video,
  Database,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart,
  BookOpen
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('stats'); // stats, questions, videos, users

  const [stats, setStats] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [videos, setVideos] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [parvas, setParvas] = useState([]);
  const [loading, setLoading] = useState(true);

  // New Question Form state
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    parvaNumber: 1,
    question: '',
    type: 'mcq',
    options: ['', '', '', ''],
    correctAnswer: '',
    explanation: '',
    difficulty: 'medium',
    points: 15
  });

  // New Video Form state
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [newVideo, setNewVideo] = useState({
    parvaNumber: 1,
    title: '',
    description: '',
    youtubeUrl: '',
    channel: 'Mahabharata Educational Archive',
    duration: '15:00'
  });

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [statsRes, qRes, vRes, uRes, pRes] = await Promise.all([
        adminService.getStats(),
        questionService.getAllQuestions(),
        videoService.getAllVideos(),
        adminService.getUsers(),
        parvaService.getAllParvas()
      ]);

      if (statsRes.success) setStats(statsRes.data);
      if (qRes.success) setQuestions(qRes.data);
      if (vRes.success) setVideos(vRes.data);
      if (uRes.success) setUsersList(uRes.data);
      if (pRes.success) setParvas(pRes.data);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadAllData();
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-crimson-dark border border-gold flex items-center justify-center text-gold">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="font-epic text-2xl font-bold text-crimson-light">Admin Access Restricted</h2>
        <p className="text-sm text-parchment-300">
          This portal is reserved for high counselors of Hastinapur. Please log in with an administrator account.
        </p>
      </div>
    );
  }

  // Handle Question Creation
  const handleCreateQuestion = async (e) => {
    e.preventDefault();
    try {
      const res = await questionService.createQuestion(newQuestion);
      if (res.success) {
        setShowQuestionModal(false);
        setNewQuestion({
          parvaNumber: 1,
          question: '',
          type: 'mcq',
          options: ['', '', '', ''],
          correctAnswer: '',
          explanation: '',
          difficulty: 'medium',
          points: 15
        });
        await loadAllData();
      }
    } catch (err) {
      alert(err.message || 'Error creating question.');
    }
  };

  const handleDeleteQuestion = async (id) => {
    if (!window.confirm('Are you sure you wish to delete this sacred question?')) return;
    try {
      await questionService.deleteQuestion(id);
      await loadAllData();
    } catch (err) {
      alert('Delete failed.');
    }
  };

  // Handle Video Creation
  const handleCreateVideo = async (e) => {
    e.preventDefault();
    try {
      const res = await videoService.createVideo(newVideo);
      if (res.success) {
        setShowVideoModal(false);
        setNewVideo({
          parvaNumber: 1,
          title: '',
          description: '',
          youtubeUrl: '',
          channel: 'Mahabharata Educational Archive',
          duration: '15:00'
        });
        await loadAllData();
      }
    } catch (err) {
      alert(err.message || 'Error creating video reference.');
    }
  };

  const handleDeleteVideo = async (id) => {
    if (!window.confirm('Delete this video reference?')) return;
    try {
      await videoService.deleteVideo(id);
      await loadAllData();
    } catch (err) {
      alert('Delete failed.');
    }
  };

  const handleToggleRole = async (userId, currentRole) => {
    const nextRole = currentRole === 'admin' ? 'user' : 'admin';
    try {
      await adminService.updateUserRole(userId, nextRole);
      await loadAllData();
    } catch (err) {
      alert('Role update failed.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold/25 pb-6">
        <div>
          <span className="px-3 py-1 rounded-full bg-vedic-surface border border-gold/40 text-[10px] font-bold text-amber-300 uppercase tracking-widest">
            Royal Counselor Panel
          </span>
          <h1 className="font-epic text-3xl sm:text-4xl font-bold gold-gradient-text mt-1">
            ADMINISTRATOR SANCTUM
          </h1>
          <p className="text-xs text-parchment-300 font-sans mt-0.5">
            Manage the 18 Parvas, 180+ questions, multimedia video archives, and user accounts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-vedic-dark border border-gold/30">
          {[
            { id: 'stats', label: 'Analytics', icon: BarChart },
            { id: 'questions', label: 'Questions', icon: HelpCircle },
            { id: 'videos', label: 'Videos', icon: Video },
            { id: 'users', label: 'Users', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-vedic-surface text-gold border border-gold/40 shadow-sm'
                    : 'text-parchment-400 hover:text-parchment-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: ANALYTICS & STATS */}
      {activeTab === 'stats' && stats && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Total Warriors</p>
              <p className="text-3xl font-black gold-gradient-text font-epic mt-1">{stats.totalUsers}</p>
            </div>
            <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Total Parvas</p>
              <p className="text-3xl font-black text-amber-300 font-epic mt-1">{stats.totalParvas}</p>
            </div>
            <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Question Bank</p>
              <p className="text-3xl font-black text-emerald-400 font-epic mt-1">{stats.totalQuestions}</p>
            </div>
            <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Video References</p>
              <p className="text-3xl font-black text-cyan-400 font-epic mt-1">{stats.totalVideos}</p>
            </div>
            <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Quizzes Taken</p>
              <p className="text-3xl font-black text-purple-400 font-epic mt-1">{stats.totalQuizzesTaken}</p>
            </div>
            <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Avg Accuracy</p>
              <p className="text-3xl font-black text-gold font-epic mt-1">{stats.averageAccuracy}%</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MANAGE QUESTIONS */}
      {activeTab === 'questions' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h2 className="font-epic text-2xl font-bold text-parchment-100">
              Question Bank ({questions.length} Questions)
            </h2>
            <button
              onClick={() => setShowQuestionModal(true)}
              className="btn-vedic-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Question</span>
            </button>
          </div>

          <div className="parchment-card ornate-border rounded-3xl p-6 overflow-hidden">
            <div className="overflow-x-auto max-h-[600px]">
              <table className="w-full text-left text-xs text-parchment-200">
                <thead className="sticky top-0 bg-vedic-dark border-b border-gold/30">
                  <tr className="text-parchment-400 font-sans uppercase">
                    <th className="py-2.5 px-3">Parva</th>
                    <th className="py-2.5 px-3">Question Text</th>
                    <th className="py-2.5 px-3">Correct Answer</th>
                    <th className="py-2.5 px-3">Difficulty</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  {questions.map((q) => (
                    <tr key={q._id || q.id} className="hover:bg-vedic-surface/40">
                      <td className="py-3 px-3 font-bold text-gold">#{q.parvaNumber}</td>
                      <td className="py-3 px-3 max-w-md truncate font-sans text-parchment-100">
                        {q.question}
                      </td>
                      <td className="py-3 px-3 font-semibold text-emerald-400">{q.correctAnswer}</td>
                      <td className="py-3 px-3 uppercase text-[10px]">{q.difficulty}</td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => handleDeleteQuestion(q._id || q.id)}
                          className="p-1 text-red-400 hover:text-red-300"
                          title="Delete Question"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MANAGE VIDEOS */}
      {activeTab === 'videos' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h2 className="font-epic text-2xl font-bold text-parchment-100">
              YouTube Video References ({videos.length})
            </h2>
            <button
              onClick={() => setShowVideoModal(true)}
              className="btn-vedic-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Video</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((vid) => (
              <div key={vid._id || vid.id} className="parchment-card ornate-border rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gold px-2 py-0.5 rounded bg-vedic-dark">
                    Parva {vid.parvaNumber}
                  </span>
                  <button
                    onClick={() => handleDeleteVideo(vid._id || vid.id)}
                    className="p-1 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-epic font-bold text-sm text-parchment-100 line-clamp-2">
                  {vid.title}
                </h3>
                <p className="text-xs text-parchment-400 truncate">{vid.youtubeUrl}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MANAGE USERS */}
      {activeTab === 'users' && (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="font-epic text-2xl font-bold text-parchment-100">
            Registered Warriors ({usersList.length})
          </h2>

          <div className="parchment-card ornate-border rounded-3xl p-6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-parchment-200">
                <thead>
                  <tr className="border-b border-gold/25 text-parchment-400 font-sans uppercase">
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Score</th>
                    <th className="py-2.5 px-3">Parvas Done</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-vedic-surface/40">
                      <td className="py-3 px-3 font-epic font-bold text-gold">{u.name}</td>
                      <td className="py-3 px-3 text-parchment-300">{u.email}</td>
                      <td className="py-3 px-3 font-bold text-amber-300">{u.totalScore} pts</td>
                      <td className="py-3 px-3">{u.completedParvasCount} / 18</td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                            u.role === 'admin'
                              ? 'bg-amber-950/60 border border-amber-500 text-amber-300'
                              : 'bg-vedic-dark text-parchment-400'
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => handleToggleRole(u.id, u.role)}
                          className="text-[11px] px-2.5 py-1 rounded bg-vedic-surface hover:bg-vedic-card border border-gold/30 text-gold"
                        >
                          {u.role === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CREATE QUESTION MODAL */}
      {showQuestionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl parchment-card ornate-border-glow rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="font-epic text-xl font-bold text-gold">ADD QUESTION TO BANK</h3>
            <form onSubmit={handleCreateQuestion} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-parchment-300 font-semibold mb-1">Parva Number (1-18)</label>
                  <input
                    type="number"
                    min="1"
                    max="18"
                    required
                    value={newQuestion.parvaNumber}
                    onChange={(e) => setNewQuestion({ ...newQuestion, parvaNumber: parseInt(e.target.value) })}
                    className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                  />
                </div>
                <div>
                  <label className="block text-parchment-300 font-semibold mb-1">Difficulty</label>
                  <select
                    value={newQuestion.difficulty}
                    onChange={(e) => setNewQuestion({ ...newQuestion, difficulty: e.target.value })}
                    className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                  >
                    <option value="easy">Easy (10 pts)</option>
                    <option value="medium">Medium (15 pts)</option>
                    <option value="hard">Hard (20 pts)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Question Prompt</label>
                <textarea
                  required
                  rows={2}
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  placeholder="Enter the factual Mahabharata question..."
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-parchment-300 font-semibold">Four Options</label>
                {newQuestion.options.map((opt, i) => (
                  <input
                    key={i}
                    type="text"
                    required
                    placeholder={`Option ${String.fromCharCode(65 + i)}`}
                    value={opt}
                    onChange={(e) => {
                      const updated = [...newQuestion.options];
                      updated[i] = e.target.value;
                      setNewQuestion({ ...newQuestion, options: updated });
                    }}
                    className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                  />
                ))}
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Exact Correct Answer</label>
                <input
                  type="text"
                  required
                  placeholder="Must match one of the four options exactly"
                  value={newQuestion.correctAnswer}
                  onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Explanation / Vedic Context</label>
                <textarea
                  required
                  rows={2}
                  value={newQuestion.explanation}
                  onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                  placeholder="Why this answer is factually correct..."
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowQuestionModal(false)}
                  className="px-4 py-2 rounded-lg bg-vedic-surface text-parchment-300"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-vedic-gold px-6 py-2 rounded-lg font-bold">
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE VIDEO MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg parchment-card ornate-border-glow rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-epic text-xl font-bold text-gold">ADD VIDEO REFERENCE</h3>
            <form onSubmit={handleCreateVideo} className="space-y-4 text-xs">
              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Parva Number (1-18)</label>
                <input
                  type="number"
                  min="1"
                  max="18"
                  required
                  value={newVideo.parvaNumber}
                  onChange={(e) => setNewVideo({ ...newVideo, parvaNumber: parseInt(e.target.value) })}
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Video Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bhishma Parva: The Bhagavad Gita Analysis"
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">YouTube URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={newVideo.youtubeUrl}
                  onChange={(e) => setNewVideo({ ...newVideo, youtubeUrl: e.target.value })}
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Description</label>
                <textarea
                  rows={2}
                  value={newVideo.description}
                  onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                  placeholder="Brief synopsis of the video content..."
                  className="w-full p-2 bg-vedic-dark border border-gold/30 rounded-lg text-parchment-100"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowVideoModal(false)}
                  className="px-4 py-2 rounded-lg bg-vedic-surface text-parchment-300"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-vedic-gold px-6 py-2 rounded-lg font-bold">
                  Save Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
