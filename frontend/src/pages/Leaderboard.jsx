import React, { useState, useEffect } from 'react';
import { leaderboardService } from '../services/api';
import {
  Trophy,
  Crown,
  Medal,
  Award,
  Search,
  CheckCircle,
  Compass,
  Sparkles,
  Shield
} from 'lucide-react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await leaderboardService.getLeaderboard();
        if (res.success) {
          setLeaderboard(res.data);
        }
      } catch (err) {
        console.error('Failed to load leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const filtered = leaderboard.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const topThree = leaderboard.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-epic text-gold text-lg">Summoning Hall of Champions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="w-16 h-16 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <Trophy className="w-8 h-8" />
        </div>
        <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text tracking-tight">
          HALL OF CHAMPIONS
        </h1>
        <p className="text-sm text-parchment-300 font-sans leading-relaxed">
          The supreme warriors of intellect and dharma who have conquered the trials of the 18 Parvas.
        </p>
      </div>

      {/* PODIUM OF TOP 3 */}
      {topThree.length >= 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 items-end">
          {/* Rank 2 (Silver) */}
          {topThree[1] && (
            <div className="parchment-card ornate-border rounded-3xl p-6 text-center space-y-3 order-2 md:order-1 border-slate-400/40">
              <div className="w-14 h-14 mx-auto rounded-full bg-vedic-dark border-2 border-slate-300 flex items-center justify-center text-slate-300 shadow-md">
                <Medal className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-400/40 text-[11px] font-bold text-slate-300">
                RANK #2
              </span>
              <h3 className="font-epic text-xl font-bold text-parchment-100 truncate">
                {topThree[1].name}
              </h3>
              <p className="font-epic text-2xl font-black text-slate-200">
                {topThree[1].totalScore} <span className="text-xs text-parchment-400">pts</span>
              </p>
              <div className="text-xs text-parchment-300 font-sans pt-2 border-t border-gold/15">
                {topThree[1].completedParvasCount} Parvas • {topThree[1].accuracy}% Accuracy
              </div>
            </div>
          )}

          {/* Rank 1 (Gold) */}
          {topThree[0] && (
            <div className="parchment-card ornate-border-glow rounded-3xl p-8 text-center space-y-4 order-1 md:order-2 border-gold shadow-gold-glow-lg -translate-y-2">
              <div className="w-20 h-20 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow animate-pulse-slow">
                <Crown className="w-10 h-10 text-gold" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-amber-950/60 border border-gold text-xs font-black text-gold uppercase tracking-wider">
                👑 GRAND CHAMPION #1
              </span>
              <h3 className="font-epic text-2xl font-black text-parchment-100 truncate">
                {topThree[0].name}
              </h3>
              <p className="font-epic text-4xl font-black gold-gradient-text">
                {topThree[0].totalScore} <span className="text-sm text-parchment-400">pts</span>
              </p>
              <div className="text-xs text-parchment-200 font-sans pt-2 border-t border-gold/25">
                {topThree[0].completedParvasCount} of 18 Parvas • {topThree[0].accuracy}% Accuracy
              </div>
            </div>
          )}

          {/* Rank 3 (Bronze) */}
          {topThree[2] && (
            <div className="parchment-card ornate-border rounded-3xl p-6 text-center space-y-3 order-3 border-amber-800/40">
              <div className="w-14 h-14 mx-auto rounded-full bg-vedic-dark border-2 border-amber-600 flex items-center justify-center text-amber-500 shadow-md">
                <Medal className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-950/40 border border-amber-700/40 text-[11px] font-bold text-amber-500">
                RANK #3
              </span>
              <h3 className="font-epic text-xl font-bold text-parchment-100 truncate">
                {topThree[2].name}
              </h3>
              <p className="font-epic text-2xl font-black text-amber-400">
                {topThree[2].totalScore} <span className="text-xs text-parchment-400">pts</span>
              </p>
              <div className="text-xs text-parchment-300 font-sans pt-2 border-t border-gold/15">
                {topThree[2].completedParvasCount} Parvas • {topThree[2].accuracy}% Accuracy
              </div>
            </div>
          )}
        </div>
      )}

      {/* Search Input */}
      <div className="p-4 rounded-2xl parchment-card ornate-border flex items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by warrior name..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-xs focus:outline-none focus:border-gold transition-all"
          />
        </div>
        <span className="text-xs text-parchment-400 font-semibold hidden sm:inline">
          {filtered.length} Warriors Ranked
        </span>
      </div>

      {/* FULL LEADERBOARD TABLE */}
      <div className="parchment-card ornate-border rounded-3xl p-6 sm:p-8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-parchment-200">
            <thead>
              <tr className="border-b border-gold/25 text-parchment-400 font-sans uppercase text-xs">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Player</th>
                <th className="py-3 px-4 text-right">Score</th>
                <th className="py-3 px-4 text-center">Parvas Mastered</th>
                <th className="py-3 px-4 text-center">Accuracy</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {filtered.map((player) => (
                <tr key={player.id} className="hover:bg-vedic-surface/40 transition-colors">
                  <td className="py-4 px-4 font-epic font-bold text-base">
                    {player.rank === 1 ? (
                      <span className="text-gold flex items-center space-x-1">
                        <Crown className="w-4 h-4" />
                        <span>#1</span>
                      </span>
                    ) : player.rank === 2 ? (
                      <span className="text-slate-300 font-bold">#2</span>
                    ) : player.rank === 3 ? (
                      <span className="text-amber-500 font-bold">#3</span>
                    ) : (
                      <span className="text-parchment-400 font-medium">#{player.rank}</span>
                    )}
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-vedic-dark border border-gold/40 flex items-center justify-center font-bold text-xs text-gold">
                        {player.name[0]}
                      </div>
                      <div>
                        <p className="font-epic font-bold text-parchment-100">{player.name}</p>
                        <p className="text-[10px] text-parchment-400">
                          {player.achievementsCount} Achievements Unlocked
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-right font-epic font-black text-lg gold-gradient-text">
                    {player.totalScore}
                  </td>

                  <td className="py-4 px-4 text-center font-semibold text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-vedic-dark border border-gold/20 text-amber-300">
                      {player.completedParvasCount} / 18
                    </span>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      player.accuracy >= 80 ? 'text-green-400 bg-green-950/40' : 'text-amber-400 bg-amber-950/40'
                    }`}>
                      {player.accuracy}%
                    </span>
                  </td>

                  <td className="py-4 px-4 text-center">
                    {player.role === 'admin' ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-600/50 text-amber-300">
                        ADMIN
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-vedic-dark border border-gold/20 text-parchment-400">
                        WARRIOR
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
