import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { parvaService } from '../services/api';
import {
  Compass,
  Award,
  BookOpen,
  ArrowRight,
  Shield,
  HelpCircle,
  Play,
  Flame,
  CheckCircle,
  Lock,
  ChevronRight,
  Sparkles,
  Trophy
} from 'lucide-react';

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [parvas, setParvas] = useState([]);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParvas = async () => {
      try {
        const res = await parvaService.getAllParvas();
        if (res.success) {
          setParvas(res.data);
        }
      } catch (err) {
        console.error('Failed to load parvas:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchParvas();
  }, []);

  const handleBeginQuest = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Background Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-crimson/25 via-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Central Vedic Chakra Motif */}
        <div className="mb-6 relative inline-flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center bg-vedic-dark/80 shadow-gold-glow animate-pulse-slow">
            <span className="text-4xl text-gold select-none animate-spin-slow">☸</span>
          </div>
          <div className="absolute -inset-2 border border-gold/20 rounded-full animate-ping opacity-25" />
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-vedic-surface border border-gold/40 text-xs font-semibold text-gold tracking-widest uppercase">
            🏹 Ancient Indian Epic • Interactive Quest • 18 Parvas
          </span>

          <h1 className="font-epic text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            <span className="gold-gradient-text block drop-shadow-lg">
              MAHABHARATA
            </span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-parchment-100 tracking-wider block mt-2 font-epic">
              THE 18 PARVAS QUEST
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-parchment-200 font-body max-w-2xl mx-auto italic leading-relaxed pt-2">
            “Walk through the greatest epic. Learn its stories. Test your wisdom.”
          </p>

          <p className="text-sm sm:text-base text-parchment-300 max-w-xl mx-auto font-sans leading-relaxed pt-1">
            Traverse all 18 Parvas from Adi Parva to Svargarohana. Study character strategies, watch reference videos, solve factual trials, and ascend to the status of Mahabharata Master.
          </p>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleBeginQuest}
              className="btn-vedic-gold px-8 py-4 rounded-xl text-sm sm:text-base font-bold flex items-center space-x-2 shadow-gold-glow-lg group"
            >
              <span>{isAuthenticated ? 'CONTINUE YOUR QUEST' : 'BEGIN THE QUEST'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/parvas"
              className="btn-vedic-crimson px-7 py-4 rounded-xl text-sm sm:text-base font-bold flex items-center space-x-2"
            >
              <Compass className="w-5 h-5 text-gold" />
              <span>EXPLORE 18 PARVAS</span>
            </Link>

            <button
              onClick={() => setShowHowToPlay(true)}
              className="px-6 py-4 rounded-xl bg-vedic-surface/80 hover:bg-vedic-card text-parchment-200 border border-gold/40 text-sm sm:text-base font-bold flex items-center space-x-2 transition-all"
            >
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>HOW TO PLAY</span>
            </button>
          </div>

          {/* Player Quick Stats if authenticated */}
          {isAuthenticated && (
            <div className="mt-8 p-4 rounded-xl parchment-card ornate-border max-w-md mx-auto flex items-center justify-around text-center">
              <div>
                <p className="text-xs text-parchment-400">Total Score</p>
                <p className="text-lg font-bold text-gold">{user?.totalScore || 0}</p>
              </div>
              <div className="w-px h-8 bg-gold/20" />
              <div>
                <p className="text-xs text-parchment-400">Parvas Conquered</p>
                <p className="text-lg font-bold text-amber-300">
                  {user?.completedParvas?.length || 0} / 18
                </p>
              </div>
              <div className="w-px h-8 bg-gold/20" />
              <div>
                <p className="text-xs text-parchment-400">Current Parva</p>
                <p className="text-lg font-bold text-parchment-100">
                  Parva {user?.currentParva || 1}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* THREE PILLARS OF WISDOM */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="parchment-card ornate-border rounded-2xl p-8 text-center space-y-4 hover:border-gold/60 transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-vedic-dark border border-gold/50 flex items-center justify-center text-gold shadow-gold-glow">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="font-epic text-xl font-bold text-gold">
              Authentic Epic Lore
            </h3>
            <p className="text-sm text-parchment-300 leading-relaxed font-sans">
              Dive into rich story summaries, character psychological cards, strategic turning points, and timeless ethical lessons across all 18 Parvas.
            </p>
          </div>

          <div className="parchment-card ornate-border rounded-2xl p-8 text-center space-y-4 hover:border-gold/60 transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-vedic-dark border border-gold/50 flex items-center justify-center text-amber-400 shadow-gold-glow">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="font-epic text-xl font-bold text-amber-300">
              180+ Dynamic Trials
            </h3>
            <p className="text-sm text-parchment-300 leading-relaxed font-sans">
              Challenge yourself with 10 factually grounded questions per Parva. Solve MCQs, character identification, timelines, and deep ethical wisdom riddles.
            </p>
          </div>

          <div className="parchment-card ornate-border rounded-2xl p-8 text-center space-y-4 hover:border-gold/60 transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-vedic-dark border border-gold/50 flex items-center justify-center text-crimson-light shadow-gold-glow">
              <Trophy className="w-7 h-7" />
            </div>
            <h3 className="font-epic text-xl font-bold text-crimson-light">
              Progression & Glory
            </h3>
            <p className="text-sm text-parchment-300 leading-relaxed font-sans">
              Unlock subsequent Parvas as you succeed. Earn rare achievements from Warrior of Wisdom to Mahabharata Master, and climb the global leaderboard.
            </p>
          </div>
        </div>
      </section>

      {/* 18 PARVAS PREVIEW JOURNEY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-gold tracking-widest uppercase">
              The Grand Canonical Odyssey
            </span>
            <h2 className="font-epic text-3xl sm:text-4xl font-bold text-parchment-100 mt-1">
              The 18 Sacred Parvas
            </h2>
          </div>
          <Link
            to="/parvas"
            className="inline-flex items-center space-x-2 text-sm font-bold text-gold hover:text-amber-300 transition-colors"
          >
            <span>View Complete Map</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parvas.slice(0, 6).map((parva) => (
            <Link
              key={parva.number}
              to={`/parva/${parva.number}`}
              className="parchment-card ornate-border rounded-xl p-6 group hover:border-gold transition-all block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded bg-vedic-dark border border-gold/30 text-[11px] font-bold text-gold">
                  PARVA {parva.number}
                </span>
                <span className="text-xs px-2 py-0.5 rounded text-amber-300 bg-amber-950/40 border border-amber-800/40">
                  {parva.difficulty}
                </span>
              </div>

              <h3 className="font-epic text-xl font-bold text-parchment-100 group-hover:text-gold transition-colors">
                {parva.name}
              </h3>
              <p className="font-sanskrit text-xs text-parchment-400 mb-2">
                {parva.sanskritName} • {parva.title}
              </p>

              <p className="text-xs text-parchment-300 line-clamp-3 leading-relaxed mb-4">
                {parva.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gold/15 text-xs text-parchment-400 font-sans">
                <span>10 Questions • Video Reference</span>
                <span className="text-gold font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/parvas"
            className="btn-vedic-gold inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-sm font-bold shadow-md"
          >
            <span>Explore All 18 Parvas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* HOW TO PLAY MODAL */}
      {showHowToPlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl parchment-card ornate-border-glow rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <h3 className="font-epic text-2xl font-bold gold-gradient-text text-center mb-6">
              HOW TO PLAY THE 18 PARVAS QUEST
            </h3>

            <div className="space-y-4 text-sm text-parchment-200 font-sans">
              <div className="flex items-start space-x-3 p-3 bg-vedic-dark rounded-xl border border-gold/20">
                <span className="font-epic text-lg font-bold text-gold shrink-0">1.</span>
                <div>
                  <h4 className="font-bold text-gold font-epic">Register & Access Dashboard</h4>
                  <p className="text-xs text-parchment-300 mt-0.5">
                    Create your warrior profile. Your journey starts at Parva 1 (Adi Parva). All progress, quiz attempts, and scores are persistently saved in the database.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-vedic-dark rounded-xl border border-gold/20">
                <span className="font-epic text-lg font-bold text-gold shrink-0">2.</span>
                <div>
                  <h4 className="font-bold text-gold font-epic">Explore Parva Lore & Video</h4>
                  <p className="text-xs text-parchment-300 mt-0.5">
                    Before attempting the quiz, read the story summary, examine key character cards and historical turning points, and watch the embedded educational YouTube documentary.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-vedic-dark rounded-xl border border-gold/20">
                <span className="font-epic text-lg font-bold text-gold shrink-0">3.</span>
                <div>
                  <h4 className="font-bold text-gold font-epic">Answer 10 Sacred Questions</h4>
                  <p className="text-xs text-parchment-300 mt-0.5">
                    Attempt the 10 quiz questions. Select your answer and receive immediate feedback with historical explanations. Scores are securely computed on the backend (Easy = 10 pts, Medium = 15 pts, Hard = 20 pts + accuracy bonuses).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-vedic-dark rounded-xl border border-gold/20">
                <span className="font-epic text-lg font-bold text-gold shrink-0">4.</span>
                <div>
                  <h4 className="font-bold text-gold font-epic">Unlock Subsequent Parvas</h4>
                  <p className="text-xs text-parchment-300 mt-0.5">
                    Passing the Parva trial immediately unlocks the next Parva in sequence. Complete all 18 Parvas to unlock the Ultimate 50-Question Final Challenge!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-vedic-dark rounded-xl border border-gold/20">
                <span className="font-epic text-lg font-bold text-gold shrink-0">5.</span>
                <div>
                  <h4 className="font-bold text-gold font-epic">Earn Achievements & Conquer Leaderboard</h4>
                  <p className="text-xs text-parchment-300 mt-0.5">
                    Collect sacred badges (Warrior of Wisdom, Epic Scholar, Kurukshetra Champion) and compete for Rank 1 on the global standings.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowHowToPlay(false)}
                className="btn-vedic-gold px-8 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider"
              >
                I Am Ready To Embark
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
