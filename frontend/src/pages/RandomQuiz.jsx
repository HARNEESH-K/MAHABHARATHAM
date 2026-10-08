import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { useAudio } from '../context/AudioContext';
import { quizService } from '../services/api';
import {
  Flame,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Shield,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const RandomQuiz = () => {
  const { user, refreshUser } = useAuth();
  const { playCorrect, playIncorrect, playVictory } = useAudio();

  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);

  const startRandomQuiz = async (count) => {
    setLoading(true);
    try {
      const res = await quizService.getRandomQuiz(count);
      if (res.success && res.data.length > 0) {
        setQuestions(res.data);
        setIsStarted(true);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setUserAnswers([]);
        setTimeTaken(0);
        setQuizCompleted(false);
      }
    } catch (err) {
      console.error('Failed to load random questions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (isStarted && !quizCompleted) {
      timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, quizCompleted]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = String(option).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();
    if (isCorrect) playCorrect();
    else playIncorrect();

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion._id || currentQuestion.id,
        selectedAnswer: option
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
          mode: 'random'
        };
        const res = await quizService.submitQuiz(payload);
        if (res.success) {
          setResultData(res.result);
          setQuizCompleted(true);
          await refreshUser();
          playVictory();
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      } catch (err) {
        alert('Submission failed. Check network.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  // Screen 1: Selection Screen
  if (!isStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-amber-400 shadow-gold-glow">
            <Flame className="w-8 h-8" />
          </div>
          <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text">
            RANDOM QUEST MODE
          </h1>
          <p className="text-sm text-parchment-200 font-sans leading-relaxed">
            Test your comprehensive recall across all unlocked chapters of the Mahabharata. Questions are drawn randomly from your available question bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { count: 10, label: 'SKIRMISH', desc: 'A swift 10-question trial of core events & heroes', time: '~3 mins' },
            { count: 20, label: 'BATTLE CAMPAIGN', desc: 'A thorough 20-question test of tactical lore', time: '~7 mins' },
            { count: 50, label: 'GRAND EXPEDITION', desc: 'An extensive 50-question deep dive into Vedic wisdom', time: '~18 mins' }
          ].map((mode) => (
            <div
              key={mode.count}
              className="parchment-card ornate-border rounded-2xl p-6 text-center space-y-4 flex flex-col justify-between hover:border-gold transition-all"
            >
              <div className="space-y-2">
                <span className="text-2xl font-black font-epic text-gold">{mode.count}</span>
                <p className="font-epic text-lg font-bold text-parchment-100">{mode.label}</p>
                <p className="text-xs text-parchment-300 font-sans">{mode.desc}</p>
              </div>

              <div className="pt-4 border-t border-gold/15 space-y-3">
                <span className="text-[11px] text-parchment-400 block font-mono">{mode.time}</span>
                <button
                  onClick={() => {
                    setQuestionCount(mode.count);
                    startRandomQuiz(mode.count);
                  }}
                  disabled={loading}
                  className="w-full btn-vedic-gold py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  {loading && questionCount === mode.count ? 'Gathering Scrolls...' : 'BEGIN'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Screen 2: Results
  if (quizCompleted && resultData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
        <div className="parchment-card ornate-border-glow rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
            <Trophy className="w-10 h-10" />
          </div>
          <h2 className="font-epic text-3xl sm:text-4xl font-bold gold-gradient-text">
            RANDOM TRIAL COMPLETED
          </h2>
          <p className="text-sm text-parchment-200 max-w-lg mx-auto font-sans">
            You successfully completed the {resultData.totalQuestions}-question random challenge with an accuracy of {resultData.accuracy}%.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-4">
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Score</p>
              <p className="text-xl font-bold text-gold font-epic mt-1">+{resultData.score}</p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Correct</p>
              <p className="text-xl font-bold text-emerald-400 font-epic mt-1">{resultData.correctAnswers}</p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[10px] text-parchment-400 uppercase font-semibold">Time</p>
              <p className="text-xl font-bold text-amber-300 font-epic mt-1">{resultData.timeTaken}s</p>
            </div>
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <button
              onClick={() => setIsStarted(false)}
              className="btn-vedic-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Try Another Mode
            </button>
            <Link
              to="/dashboard"
              className="px-6 py-3 rounded-xl bg-vedic-surface border border-gold/40 text-xs font-bold text-parchment-200"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Screen 3: Gameplay
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between border-b border-gold/20 pb-4">
        <div>
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest">
            RANDOM QUEST TRIAL
          </span>
          <h2 className="font-epic text-xl sm:text-2xl font-bold text-parchment-100">
            Parva {currentQuestion.parvaNumber} Question
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
              {currentIndex + 1} <span className="text-xs text-parchment-400">/ {questions.length}</span>
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

        <div className="pt-4 border-t border-gold/15 flex justify-between items-center">
          <button
            onClick={() => setIsStarted(false)}
            className="text-xs text-parchment-400 hover:text-gold"
          >
            Quit Trial
          </button>
          {isAnswered && (
            <button
              onClick={handleNext}
              disabled={submitting}
              className="btn-vedic-gold px-8 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-gold-glow"
            >
              <span>{currentIndex < questions.length - 1 ? 'NEXT' : 'FINISH TRIAL'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomQuiz;
