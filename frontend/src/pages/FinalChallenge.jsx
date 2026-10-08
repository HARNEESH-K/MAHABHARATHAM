import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { useAudio } from '../context/AudioContext';
import { quizService } from '../services/api';
import {
  Sparkles,
  Lock,
  Crown,
  Trophy,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';

const FinalChallenge = () => {
  const { user, refreshUser } = useAuth();
  const { playCorrect, playIncorrect, playVictory } = useAudio();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [lockedError, setLockedError] = useState('');

  const completedCount = (user?.completedParvas || []).length;
  const isUnlocked = completedCount >= 18 || user?.role === 'admin';

  useEffect(() => {
    let timer;
    if (isStarted && !quizCompleted) {
      timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, quizCompleted]);

  const handleStartFinalChallenge = async () => {
    setLoading(true);
    setLockedError('');
    try {
      const res = await quizService.getFinalChallenge();
      if (res.success && res.data.length > 0) {
        setQuestions(res.data);
        setIsStarted(true);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setUserAnswers([]);
        setTimeTaken(0);
      }
    } catch (err) {
      setLockedError(err.message || 'Complete all 18 Parvas to unlock this ultimate trial.');
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const isCorrect = String(opt).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();
    if (isCorrect) playCorrect();
    else playIncorrect();

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion._id || currentQuestion.id,
        selectedAnswer: opt
      }
    ]);
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setSubmitting(true);
      try {
        const payload = {
          answers: userAnswers,
          timeTaken,
          mode: 'final_challenge'
        };
        const res = await quizService.submitQuiz(payload);
        if (res.success) {
          setResultData(res.result);
          setQuizCompleted(true);
          await refreshUser();
          playVictory();
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.5 },
            colors: ['#ffd700', '#ffd700', '#ffffff', '#e67e22', '#800020']
          });
        }
      } catch (err) {
        alert('Submission failed.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  // Locked Screen
  if (!isUnlocked) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-black/60 border-2 border-gold/40 flex items-center justify-center text-parchment-400">
          <Lock className="w-10 h-10 text-gold" />
        </div>
        <h1 className="font-epic text-3xl font-bold gold-gradient-text">
          THE FINAL CHALLENGE IS LOCKED
        </h1>
        <p className="text-sm text-parchment-300 font-sans leading-relaxed">
          The ultimate 50-question sacred test is reserved for seekers who have conquered all 18 Parvas.
        </p>
        <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30 text-xs text-amber-300 font-bold">
          Your Progress: {completedCount} / 18 Parvas Completed
        </div>
        <Link to="/parvas" className="btn-vedic-gold inline-flex px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
          Return to 18 Parvas Quest
        </Link>
      </div>
    );
  }

  // Final Completion Screen
  if (quizCompleted && resultData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10 animate-fadeIn">
        <div className="parchment-card ornate-border-glow rounded-3xl p-10 sm:p-14 text-center space-y-6 border-gold shadow-gold-glow-lg">
          <div className="w-24 h-24 mx-auto rounded-full bg-vedic-dark border-4 border-gold flex items-center justify-center text-gold shadow-gold-glow-lg animate-pulse-slow">
            <Crown className="w-12 h-12 text-gold" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1 rounded-full bg-amber-950/60 border border-gold text-xs font-black text-gold uppercase tracking-widest">
              ASCENDED MASTER OF ARYAVARTA
            </span>
            <h1 className="font-epic text-4xl sm:text-6xl font-black gold-gradient-text">
              YOU HAVE COMPLETED THE MAHABHARATA QUEST!
            </h1>
            <p className="text-base text-parchment-200 max-w-xl mx-auto font-sans leading-relaxed">
              By conquering this monumental 50-question trial across all 18 Parvas, you have demonstrated unwavering commitment to truth, dharma, and wisdom.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-6">
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/40">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Final Score</p>
              <p className="text-3xl font-black text-gold font-epic mt-1">+{resultData.score}</p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/40">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Accuracy</p>
              <p className="text-3xl font-black text-cyan-400 font-epic mt-1">{resultData.accuracy}%</p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/40">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Correct Answers</p>
              <p className="text-3xl font-black text-emerald-400 font-epic mt-1">
                {resultData.correctAnswers} / {resultData.totalQuestions}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/40">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Global Rank</p>
              <p className="text-3xl font-black text-amber-300 font-epic mt-1">#{user?.rank || 1}</p>
            </div>
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <Link to="/leaderboard" className="btn-vedic-gold px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider">
              View Hall of Champions
            </Link>
            <Link to="/dashboard" className="px-6 py-3.5 rounded-xl bg-vedic-surface border border-gold/40 text-xs font-bold text-parchment-200">
              Player Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Pre-Start Screen
  if (!isStarted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="space-y-3">
          <span className="px-3 py-1 rounded-full bg-vedic-surface border border-gold/40 text-xs font-bold text-gold uppercase tracking-widest">
            The Pinnacle of Wisdom
          </span>
          <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text">
            THE FINAL CHALLENGE
          </h1>
          <p className="text-sm text-parchment-200 max-w-xl mx-auto font-sans leading-relaxed">
            You have unlocked the sacred ultimate trial. 50 comprehensive questions synthesized from all 18 Parvas will test your supreme retention, analytical discernment, and ethical understanding.
          </p>
        </div>

        <div className="p-6 rounded-2xl parchment-card ornate-border max-w-md mx-auto text-left space-y-2 text-xs text-parchment-300 font-sans">
          <p className="text-gold font-bold uppercase">Challenge Details:</p>
          <p>• 50 Questions covering all 18 Parvas</p>
          <p>• Timed session with full score computation</p>
          <p>• Unlocks the prestigious "Mahabharata Master" title</p>
        </div>

        <button
          onClick={handleStartFinalChallenge}
          disabled={loading}
          className="btn-vedic-gold px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider shadow-gold-glow-lg"
        >
          {loading ? 'Consulting the Cosmic Scales...' : 'COMMENCE 50-QUESTION TRIAL'}
        </button>
      </div>
    );
  }

  // Active Final Challenge Gameplay
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between border-b border-gold/20 pb-4">
        <div>
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest">
            THE FINAL CHALLENGE
          </span>
          <h2 className="font-epic text-xl sm:text-2xl font-bold text-parchment-100">
            Parva {currentQuestion.parvaNumber} Trial
          </h2>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-xs text-parchment-300 font-mono bg-vedic-surface px-3 py-1.5 rounded-lg border border-gold/30">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{timeTaken}s</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-parchment-400">Progress</span>
            <p className="font-epic text-lg font-bold text-gold">
              {currentIndex + 1} <span className="text-xs text-parchment-400">/ 50</span>
            </p>
          </div>
        </div>
      </div>

      <div className="parchment-card ornate-border-glow rounded-3xl p-8 sm:p-10 space-y-8">
        <h3 className="font-epic text-xl sm:text-2xl font-bold text-parchment-100">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === opt;
            const isThisCorrect =
              isAnswered && String(opt).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();

            let style = 'bg-vedic-dark hover:bg-vedic-surface border-gold/30 text-parchment-200';
            if (isAnswered) {
              if (isThisCorrect) style = 'bg-emerald-950/50 border-emerald-500 text-emerald-200';
              else if (isSelected) style = 'bg-crimson-night/60 border-red-500 text-red-200';
              else style = 'opacity-50 border-parchment-800';
            } else if (isSelected) {
              style = 'bg-vedic-surface border-gold text-gold ring-1 ring-gold';
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(opt)}
                className={`w-full text-left p-4 rounded-xl border flex items-center space-x-4 transition-all ${style}`}
              >
                <span className="w-8 h-8 rounded-lg bg-vedic-surface border border-gold/30 flex items-center justify-center font-epic font-bold text-xs text-gold shrink-0">
                  {letter}
                </span>
                <span className="text-sm font-medium flex-1">{opt}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30 text-xs text-parchment-300 font-sans leading-relaxed">
            <strong>Context:</strong> {currentQuestion.explanation}
          </div>
        )}

        <div className="pt-4 border-t border-gold/15 flex justify-end">
          {isAnswered && (
            <button
              onClick={handleNext}
              disabled={submitting}
              className="btn-vedic-gold px-8 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-gold-glow"
            >
              <span>{currentIndex < questions.length - 1 ? 'NEXT QUESTION' : 'COMPLETE FINAL CHALLENGE'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalChallenge;
