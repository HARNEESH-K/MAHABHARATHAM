import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { useAudio } from '../context/AudioContext';
import { parvaService, quizService } from '../services/api';
import {
  HelpCircle,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Trophy,
  Shield,
  Flame,
  ArrowLeft
} from 'lucide-react';

const QuizPage = () => {
  const { parvaId } = useParams();
  const navigate = useNavigate();
  const { user, refreshUser } = useAuth();
  const { playCorrect, playIncorrect, playVictory } = useAudio();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [parvaName, setParvaName] = useState(`Parva ${parvaId}`);

  const timerRef = useRef(null);

  // Fetch Questions from Backend API
  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      try {
        const [qRes, pRes] = await Promise.all([
          parvaService.getParvaQuestions(parvaId),
          parvaService.getParvaById(parvaId)
        ]);

        if (qRes.success && qRes.data.length > 0) {
          setQuestions(qRes.data);
        }
        if (pRes.success) {
          setParvaName(pRes.data.name);
        }
      } catch (err) {
        console.error('Failed to load quiz:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeTaken((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [parvaId]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = String(option).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();
    if (isCorrect) {
      playCorrect();
    } else {
      playIncorrect();
    }

    // Record answer
    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion._id || currentQuestion.id,
        selectedAnswer: option
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      handleCompleteQuiz();
    }
  };

  const handleCompleteQuiz = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitting(true);

    try {
      const payload = {
        parvaNumber: parseInt(parvaId),
        answers: userAnswers,
        timeTaken,
        mode: 'parva'
      };

      const res = await quizService.submitQuiz(payload);
      if (res.success) {
        setResultData(res.result);
        setQuizCompleted(true);
        await refreshUser();

        // Celebration Confetti
        if (res.result.accuracy >= 50) {
          playVictory();
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#ffd700', '#d4af37', '#e67e22', '#800020']
          });
        }
      }
    } catch (err) {
      console.error('Failed to submit quiz:', err);
      alert('Quiz could not be submitted. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-epic text-gold text-lg">Drawing the bow of knowledge...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-epic text-2xl text-gold font-bold">No Questions in Question Bank</h2>
        <p className="text-sm text-parchment-300">
          The questions for this Parva are still being transcribed.
        </p>
        <Link to="/parvas" className="btn-vedic-gold inline-flex px-6 py-2.5 rounded-xl text-xs font-bold">
          Return to 18 Parvas
        </Link>
      </div>
    );
  }

  // ================= RESULTS SCREEN =================
  if (quizCompleted && resultData) {
    const isSuccess = resultData.accuracy >= 50;

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 animate-fadeIn">
        {/* Banner */}
        <div className="parchment-card ornate-border-glow rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="w-20 h-20 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow-lg">
            {isSuccess ? <Trophy className="w-10 h-10 text-gold" /> : <Shield className="w-10 h-10 text-amber-400" />}
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-vedic-surface border border-gold/40 text-xs font-bold text-gold uppercase tracking-widest">
              {isSuccess ? 'TRIAL CONQUERED' : 'TRIAL COMPLETED'}
            </span>
            <h1 className="font-epic text-3xl sm:text-5xl font-black gold-gradient-text">
              {isSuccess ? 'VICTORY IN DHARMA!' : 'HONORABLE EFFORT'}
            </h1>
            <p className="text-sm sm:text-base text-parchment-200 max-w-xl mx-auto font-sans">
              {isSuccess
                ? `You have proven your mastery over ${parvaName}. The next sacred chapter has been unlocked in your epic journey!`
                : `You scored ${resultData.accuracy}%. Study the Parva lore further and retry to strengthen your mastery.`}
            </p>
          </div>

          {/* Result Score Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-4">
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[11px] text-parchment-400 uppercase font-semibold">Score Earned</p>
              <p className="text-2xl font-black text-gold font-epic mt-1">+{resultData.score}</p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[11px] text-parchment-400 uppercase font-semibold">Accuracy</p>
              <p className="text-2xl font-black text-cyan-400 font-epic mt-1">{resultData.accuracy}%</p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[11px] text-parchment-400 uppercase font-semibold">Correct Answers</p>
              <p className="text-2xl font-black text-emerald-400 font-epic mt-1">
                {resultData.correctAnswers} / {resultData.totalQuestions}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/30">
              <p className="text-[11px] text-parchment-400 uppercase font-semibold">Time Elapsed</p>
              <p className="text-2xl font-black text-amber-300 font-epic mt-1">{resultData.timeTaken}s</p>
            </div>
          </div>

          {/* Newly Unlocked Achievements Notification */}
          {(resultData.newAchievements || []).length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-gold/50 max-w-lg mx-auto text-left flex items-center space-x-4 shadow-gold-glow">
              <div className="w-12 h-12 rounded-full bg-vedic-dark border border-gold flex items-center justify-center text-gold shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gold uppercase tracking-wider">New Achievement Unlocked!</p>
                <p className="text-sm font-bold text-parchment-100 font-epic">
                  {resultData.newAchievements[0].title}
                </p>
                <p className="text-xs text-parchment-300">
                  {resultData.newAchievements[0].description}
                </p>
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            {resultData.unlockedNext && (
              <Link
                to={`/parva/${resultData.nextParvaNumber}`}
                className="btn-vedic-gold px-8 py-3.5 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-gold-glow-lg"
              >
                <span>ADVANCE TO PARVA {resultData.nextParvaNumber}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <button
              onClick={() => {
                setQuizCompleted(false);
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
                setUserAnswers([]);
                setTimeTaken(0);
              }}
              className="px-6 py-3.5 rounded-xl bg-vedic-surface hover:bg-vedic-card text-parchment-200 border border-gold/40 text-sm font-bold flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4 text-gold" />
              <span>Retry Trial</span>
            </button>

            <Link
              to="/dashboard"
              className="px-6 py-3.5 rounded-xl bg-vedic-surface hover:bg-vedic-card text-parchment-200 border border-gold/40 text-sm font-bold flex items-center space-x-2"
            >
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Detailed Review Breakdown */}
        <div className="parchment-card ornate-border rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="font-epic text-2xl font-bold text-gold">SACRED ANSWER REVIEW</h2>
          <div className="space-y-4">
            {resultData.answers.map((ans, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${
                  ans.isCorrect
                    ? 'bg-emerald-950/20 border-emerald-600/40'
                    : 'bg-crimson-night/30 border-crimson-light/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-parchment-400 uppercase">
                      Question {idx + 1}
                    </span>
                    <h4 className="font-epic text-base font-bold text-parchment-100">
                      {ans.questionText}
                    </h4>
                  </div>
                  {ans.isCorrect ? (
                    <span className="flex items-center text-xs font-bold text-emerald-400 shrink-0">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      +{ans.pointsAwarded} pts
                    </span>
                  ) : (
                    <span className="flex items-center text-xs font-bold text-red-400 shrink-0">
                      <XCircle className="w-4 h-4 mr-1" />
                      0 pts
                    </span>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-gold/10 text-xs space-y-1">
                  <p className="text-parchment-300">
                    <strong className="text-parchment-400">Your Answer:</strong> {ans.selectedAnswer}
                  </p>
                  {!ans.isCorrect && (
                    <p className="text-emerald-400">
                      <strong className="text-emerald-500">Correct Answer:</strong> {ans.correctAnswer}
                    </p>
                  )}
                  <p className="text-parchment-400 italic pt-1">
                    <strong>Wisdom:</strong> {ans.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ================= ACTIVE GAMEPLAY SCREEN =================
  const isCorrectAnswer =
    isAnswered &&
    String(selectedOption).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Quiz Top Header */}
      <div className="flex items-center justify-between border-b border-gold/20 pb-4">
        <div>
          <span className="text-[10px] font-bold text-gold uppercase tracking-widest">
            PARVA {parvaId}
          </span>
          <h2 className="font-epic text-2xl font-bold text-parchment-100 truncate max-w-md">
            {parvaName}
          </h2>
        </div>

        <div className="flex items-center space-x-6">
          {/* Timer */}
          <div className="flex items-center space-x-1.5 text-xs text-parchment-300 font-mono bg-vedic-surface px-3 py-1.5 rounded-lg border border-gold/30">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{timeTaken}s</span>
          </div>

          {/* Question Counter */}
          <div className="text-right">
            <span className="text-xs text-parchment-400">Question</span>
            <p className="font-epic text-lg font-bold text-gold">
              {currentIndex + 1} <span className="text-xs text-parchment-400">/ {questions.length}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-vedic-dark rounded-full overflow-hidden border border-gold/20">
        <div
          className="h-full bg-gradient-to-r from-amber-600 to-gold transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* QUESTION CARD */}
      <div className="parchment-card ornate-border-glow rounded-3xl p-8 sm:p-10 space-y-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-vedic-surface border border-gold/30 text-[10px] font-bold text-amber-300 uppercase">
              {currentQuestion.type?.replace('_', ' ')} • {currentQuestion.difficulty}
            </span>
            <span className="text-xs text-gold font-bold">
              +{currentQuestion.points || 10} Points
            </span>
          </div>

          <h3 className="font-epic text-xl sm:text-2xl font-bold text-parchment-100 leading-snug">
            {currentQuestion.question}
          </h3>
        </div>

        {/* OPTIONS LIST */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === option;
            const isThisCorrect =
              isAnswered && String(option).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();

            let optionStyle = 'bg-vedic-dark hover:bg-vedic-surface border-gold/30 text-parchment-200';
            if (isAnswered) {
              if (isThisCorrect) {
                optionStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-sm';
              } else if (isSelected) {
                optionStyle = 'bg-crimson-night/60 border-red-500 text-red-200';
              } else {
                optionStyle = 'bg-vedic-dark/40 border-parchment-800/40 text-parchment-400 opacity-60';
              }
            } else if (isSelected) {
              optionStyle = 'bg-vedic-surface border-gold text-gold ring-1 ring-gold';
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-4 rounded-xl border flex items-center space-x-4 transition-all ${optionStyle}`}
              >
                <span className="w-8 h-8 rounded-lg bg-vedic-surface border border-gold/30 flex items-center justify-center font-epic font-bold text-xs text-gold shrink-0">
                  {letter}
                </span>
                <span className="text-sm sm:text-base font-sans font-medium flex-1">
                  {option}
                </span>

                {isAnswered && isThisCorrect && (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {isAnswered && isSelected && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* FEEDBACK & EXPLANATION BOX (Immediately shown after selecting an answer) */}
        {isAnswered && (
          <div
            className={`p-5 rounded-2xl border space-y-2 animate-fadeIn ${
              isCorrectAnswer
                ? 'bg-emerald-950/30 border-emerald-600/50 text-emerald-200'
                : 'bg-crimson-night/40 border-crimson-light/50 text-red-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              {isCorrectAnswer ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-epic font-bold text-sm text-emerald-300 uppercase tracking-wider">
                    Correct! Righteous Wisdom.
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="font-epic font-bold text-sm text-red-300 uppercase tracking-wider">
                    Incorrect! The Correct Answer was: {currentQuestion.correctAnswer}
                  </span>
                </>
              )}
            </div>

            <p className="text-xs text-parchment-300 font-sans leading-relaxed pt-1">
              <strong>Scriptural Context:</strong> {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* BOTTOM ACTION: NEXT QUESTION / COMPLETE PARVA */}
        <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
          <Link
            to={`/parva/${parvaId}`}
            className="text-xs text-parchment-400 hover:text-gold flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Abandon Trial</span>
          </Link>

          {isAnswered ? (
            <button
              onClick={handleNextQuestion}
              disabled={submitting}
              className="btn-vedic-gold px-8 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-gold-glow"
            >
              <span>
                {currentIndex < questions.length - 1 ? 'NEXT QUESTION' : 'COMPLETE PARVA'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-xs text-parchment-500 italic">
              Select an option above to proceed
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
