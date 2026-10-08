import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { parvaService } from '../services/api';
import {
  Compass,
  CheckCircle,
  Lock,
  ChevronRight,
  Shield,
  Star,
  Search,
  Filter,
  Play
} from 'lucide-react';

const Parvas = () => {
  const { user } = useAuth();
  const [parvas, setParvas] = useState([]);
  const [filteredParvas, setFilteredParvas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, completed, unlocked, locked

  useEffect(() => {
    const fetchParvas = async () => {
      try {
        const res = await parvaService.getAllParvas();
        if (res.success) {
          setParvas(res.data);
          setFilteredParvas(res.data);
        }
      } catch (err) {
        console.error('Failed to load Parvas:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchParvas();
  }, []);

  useEffect(() => {
    let result = [...parvas];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.sanskritName.includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (statusFilter === 'completed') {
      result = result.filter((p) => p.isCompleted);
    } else if (statusFilter === 'unlocked') {
      result = result.filter((p) => p.isUnlocked && !p.isCompleted);
    } else if (statusFilter === 'locked') {
      result = result.filter((p) => !p.isUnlocked);
    }

    setFilteredParvas(result);
  }, [searchQuery, statusFilter, parvas]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-epic text-gold text-lg">Unrolling the 18 Parvas Manuscripts...</p>
        </div>
      </div>
    );
  }

  const completedCount = parvas.filter((p) => p.isCompleted).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-vedic-surface border border-gold/40 text-xs font-semibold text-gold tracking-widest uppercase">
          Canonical Journey of Aryavarta
        </span>
        <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text tracking-tight">
          THE 18 SACRED PARVAS
        </h1>
        <p className="text-sm text-parchment-300 font-sans leading-relaxed">
          From the cosmic origins in Adi Parva to the ultimate heavenly ascension in Svargarohana Parva. Explore their timeless philosophies, watch educational documentaries, and conquer their trials.
        </p>

        {/* Global Progress Bar */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="flex justify-between text-xs text-parchment-300 font-semibold mb-1.5">
            <span>Progress: {completedCount} of 18 Parvas Mastered</span>
            <span className="text-gold">{Math.round((completedCount / 18) * 100)}%</span>
          </div>
          <div className="w-full h-2.5 bg-vedic-dark rounded-full overflow-hidden border border-gold/30">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-gold to-yellow-300 transition-all duration-500"
              style={{ width: `${(completedCount / 18) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl parchment-card ornate-border">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, theme, or lesson..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-xs focus:outline-none focus:border-gold transition-all"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <span className="text-xs text-parchment-400 flex items-center mr-1">
            <Filter className="w-3.5 h-3.5 mr-1" />
            Filter:
          </span>
          {[
            { id: 'all', label: 'All (18)' },
            { id: 'unlocked', label: 'Unlocked' },
            { id: 'completed', label: 'Completed' },
            { id: 'locked', label: 'Locked' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setStatusFilter(f.id)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all whitespace-nowrap ${
                statusFilter === f.id
                  ? 'bg-vedic-surface border-gold text-gold shadow-sm'
                  : 'bg-vedic-dark/60 border-gold/20 text-parchment-300 hover:text-gold'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* 18 Parvas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParvas.map((parva) => {
          const isUnlocked = parva.isUnlocked;
          const isCompleted = parva.isCompleted;

          return (
            <div
              key={parva.number}
              className={`parchment-card ornate-border rounded-2xl p-6 flex flex-col justify-between transition-all group relative ${
                isCompleted
                  ? 'border-emerald-600/50 hover:border-emerald-400'
                  : isUnlocked
                  ? 'border-gold/40 hover:border-gold shadow-md'
                  : 'border-parchment-800/40 opacity-70'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-vedic-dark border border-gold/40 flex items-center justify-center text-xs font-bold text-gold">
                      {parva.number}
                    </span>
                    <span className="text-xs font-bold text-parchment-300">
                      PARVA {parva.number}
                    </span>
                  </div>

                  {isCompleted ? (
                    <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-600/40">
                      <CheckCircle className="w-3.5 h-3.5 mr-1" />
                      COMPLETED
                    </span>
                  ) : isUnlocked ? (
                    <span className="text-xs font-bold text-gold bg-vedic-dark px-2.5 py-1 rounded-full border border-gold/40">
                      UNLOCKED
                    </span>
                  ) : (
                    <span className="flex items-center text-xs font-bold text-parchment-500 bg-black/40 px-2.5 py-1 rounded-full border border-parchment-800/40">
                      <Lock className="w-3.5 h-3.5 mr-1" />
                      LOCKED
                    </span>
                  )}
                </div>

                {/* Names */}
                <h3 className="font-epic text-2xl font-bold text-parchment-100 group-hover:text-gold transition-colors">
                  {parva.name}
                </h3>
                <p className="font-sanskrit text-xs text-amber-300/80 mb-1">
                  {parva.sanskritName} • {parva.title}
                </p>

                {/* Summary */}
                <p className="text-xs text-parchment-300 line-clamp-3 leading-relaxed mt-2 font-sans">
                  {parva.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-vedic-dark border border-gold/20 text-parchment-300">
                    Difficulty: <strong className="text-gold">{parva.difficulty}</strong>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-vedic-dark border border-gold/20 text-parchment-300">
                    Points: <strong className="text-amber-300">+{parva.pointsReward}</strong>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-vedic-dark border border-gold/20 text-parchment-300">
                    10 Questions
                  </span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
                {isUnlocked ? (
                  <Link
                    to={`/parva/${parva.number}`}
                    className="w-full btn-vedic-gold py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>EXPLORE & TRIAL</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="w-full text-center py-2 text-xs text-parchment-500 italic">
                    Complete Parva {parva.number - 1} to Unlock
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Parvas;
