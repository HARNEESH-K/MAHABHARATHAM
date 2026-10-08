import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { progressService, quizService } from '../services/api';
import {
  Trophy,
  Target,
  Award,
  CheckCircle,
  Lock,
  ArrowRight,
  Compass,
  Clock,
  Sparkles,
  Flame,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

const Dashboard = () => {
  const { user, refreshUser } = useAuth();
  const [progressData, setProgressData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        await refreshUser();
        const [progRes, histRes] = await Promise.all([
          progressService.getProgress(),
          quizService.getHistory()
        ]);
        if (progRes.success) setProgressData(progRes.data);
        if (histRes.success) setHistory(histRes.data);
      } catch (err) {
        console.error('Failed to load dashboard metrics:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-epic text-gold text-lg">Gathering your sacred achievements...</p>
        </div>
      </div>
    );
  }

  const completedParvas = user?.completedParvas || [];
  const currentParvaNum = user?.currentParva || 1;
  const parvasList = progressData?.parvas || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* WELCOME BANNER */}
      <div className="relative parchment-card ornate-border-glow rounded-3xl p-8 sm:p-10 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-vedic-surface border border-gold/40 text-xs font-semibold text-gold tracking-widest uppercase">
              Warrior of Aryavarta
            </span>
            <h1 className="font-epic text-3xl sm:text-5xl font-black text-parchment-100">
              Welcome, <span className="gold-gradient-text">{user?.name}</span>
            </h1>
            <p className="text-sm text-parchment-300 font-sans max-w-2xl leading-relaxed">
              Your spirit walks the hallowed paths of Kurukshetra. Conquer the 18 Parvas, master the timeless ethical dilemmas, and etch your wisdom into history.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={`/parva/${currentParvaNum}`}
              className="btn-vedic-gold px-6 py-3.5 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-gold-glow"
            >
              <span>RESUME CURRENT PARVA ({currentParvaNum})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* STATS MATRIX */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Total Score */}
        <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
          <p className="text-xs text-parchment-400 font-semibold uppercase">Total Score</p>
          <p className="text-2xl sm:text-3xl font-extrabold gold-gradient-text mt-1">
            {user?.totalScore || 0}
          </p>
          <span className="text-[10px] text-amber-300 font-medium">Sacred Points</span>
        </div>

        {/* Parvas Completed */}
        <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
          <p className="text-xs text-parchment-400 font-semibold uppercase">Parvas Done</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">
            {completedParvas.length} <span className="text-sm text-parchment-400">/ 18</span>
          </p>
          <span className="text-[10px] text-amber-300 font-medium">
            {Math.round((completedParvas.length / 18) * 100)}% Journey
          </span>
        </div>

        {/* Questions Answered */}
        <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
          <p className="text-xs text-parchment-400 font-semibold uppercase">Questions</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-parchment-100 mt-1">
            {user?.totalQuestionsAnswered || 0}
          </p>
          <span className="text-[10px] text-parchment-400">Trials Answered</span>
        </div>

        {/* Correct Answers */}
        <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
          <p className="text-xs text-parchment-400 font-semibold uppercase">Correct</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-green-400 mt-1">
            {user?.totalCorrectAnswers || 0}
          </p>
          <span className="text-[10px] text-green-400/80">Accurate Answers</span>
        </div>

        {/* Accuracy */}
        <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
          <p className="text-xs text-parchment-400 font-semibold uppercase">Accuracy</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1">
            {progressData?.accuracy || 0}%
          </p>
          <span className="text-[10px] text-cyan-300/80">Intellect Precision</span>
        </div>

        {/* Current Rank */}
        <div className="parchment-card ornate-border rounded-2xl p-5 text-center">
          <p className="text-xs text-parchment-400 font-semibold uppercase">Current Rank</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-gold mt-1">
            #{user?.rank || 1}
          </p>
          <span className="text-[10px] text-gold/80">Global Standing</span>
        </div>
      </div>

      {/* MAHABHARATA JOURNEY TRAIL (ALL 18 PARVAS) */}
      <div className="parchment-card ornate-border rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold/20 pb-4">
          <div>
            <h2 className="font-epic text-2xl sm:text-3xl font-bold text-parchment-100 flex items-center space-x-2">
              <Compass className="w-6 h-6 text-gold" />
              <span>MAHABHARATA JOURNEY</span>
            </h2>
            <p className="text-xs text-parchment-300 mt-1 font-sans">
              All 18 Parvas in canonical sequence. Complete each Parva quiz to unlock the next chapter.
            </p>
          </div>

          <Link
            to="/parvas"
            className="text-xs font-bold text-gold hover:text-amber-300 flex items-center space-x-1"
          >
            <span>Full Map Details</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 18 Parvas Grid with status markers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {parvasList.map((p) => {
            const isCompleted = completedParvas.includes(p.number);
            const isCurrent = currentParvaNum === p.number;
            const isUnlocked = p.isUnlocked || isCompleted || isCurrent;

            return (
              <div
                key={p.number}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  isCompleted
                    ? 'bg-emerald-950/30 border-emerald-600/50 hover:border-emerald-400'
                    : isCurrent
                    ? 'bg-vedic-surface border-gold shadow-gold-glow ring-1 ring-gold'
                    : isUnlocked
                    ? 'bg-vedic-dark border-gold/40 hover:border-gold'
                    : 'bg-black/40 border-parchment-800/40 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-parchment-400">
                    #{p.number}
                  </span>

                  {isCompleted ? (
                    <span className="flex items-center text-[10px] font-bold text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5 mr-1" />
                      DONE
                    </span>
                  ) : isCurrent ? (
                    <span className="flex items-center text-[10px] font-bold text-gold animate-pulse">
                      <Flame className="w-3.5 h-3.5 mr-1 text-gold" />
                      ACTIVE
                    </span>
                  ) : isUnlocked ? (
                    <span className="text-[10px] font-semibold text-amber-300">
                      OPEN
                    </span>
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-parchment-500" />
                  )}
                </div>

                <h3 className="font-epic text-sm font-bold text-parchment-100 truncate">
                  {p.name}
                </h3>
                <p className="font-sanskrit text-[10px] text-parchment-400 truncate">
                  {p.sanskritName}
                </p>

                <div className="mt-3 pt-2 border-t border-gold/10 flex items-center justify-between text-[11px]">
                  {isUnlocked ? (
                    <Link
                      to={`/parva/${p.number}`}
                      className="text-gold hover:underline font-bold"
                    >
                      Enter &rarr;
                    </Link>
                  ) : (
                    <span className="text-parchment-500 text-[10px]">Locked</span>
                  )}

                  {p.bestScore > 0 && (
                    <span className="text-gold font-bold text-[10px]">
                      {p.bestScore} pts
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ACHIEVEMENTS & RECENT QUIZZES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Achievements Showcase */}
        <div className="parchment-card ornate-border rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-gold/20 pb-3">
            <h3 className="font-epic text-xl font-bold text-gold flex items-center space-x-2">
              <Award className="w-5 h-5 text-gold" />
              <span>ACHIEVEMENTS</span>
            </h3>
            <Link to="/achievements" className="text-xs text-parchment-400 hover:text-gold">
              View All &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {(user?.achievements || []).length > 0 ? (
              user.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-vedic-dark border border-gold/30 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-vedic-surface border border-gold/50 flex items-center justify-center text-gold">
                    <Sparkles className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gold font-epic">{ach.title}</h4>
                    <p className="text-[10px] text-parchment-300">
                      Unlocked on {new Date(ach.unlockedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-parchment-400 text-xs">
                No achievements unlocked yet. Complete your first Parva to claim the 'First Quest' badge!
              </div>
            )}
          </div>
        </div>

        {/* Recent Quiz Attempts */}
        <div className="lg:col-span-2 parchment-card ornate-border rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-gold/20 pb-3">
            <h3 className="font-epic text-xl font-bold text-gold flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gold" />
              <span>RECENT QUIZ ATTEMPTS</span>
            </h3>
          </div>

          {history.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-parchment-200">
                <thead>
                  <tr className="border-b border-gold/20 text-parchment-400 font-sans uppercase">
                    <th className="py-2.5">Trial / Parva</th>
                    <th className="py-2.5">Score</th>
                    <th className="py-2.5">Accuracy</th>
                    <th className="py-2.5">Time</th>
                    <th className="py-2.5">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  {history.slice(0, 5).map((attempt, i) => (
                    <tr key={i} className="hover:bg-vedic-surface/40 transition-colors">
                      <td className="py-3 font-semibold text-gold font-epic">
                        {attempt.parvaName || `Parva ${attempt.parvaNumber}`}
                      </td>
                      <td className="py-3 font-bold text-amber-300">
                        +{attempt.score} pts
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded font-bold ${
                          attempt.accuracy >= 80 ? 'text-green-400 bg-green-950/40' : 'text-amber-400 bg-amber-950/40'
                        }`}>
                          {attempt.accuracy}% ({attempt.correctAnswers}/{attempt.totalQuestions})
                        </span>
                      </td>
                      <td className="py-3 text-parchment-400">
                        {attempt.timeTaken}s
                      </td>
                      <td className="py-3 text-parchment-400">
                        {new Date(attempt.completedAt || attempt.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-parchment-400 text-xs">
              No previous attempts recorded. Choose an unlocked Parva above to begin your first trial!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
