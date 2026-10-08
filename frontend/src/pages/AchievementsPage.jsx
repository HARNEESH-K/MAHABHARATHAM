import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { adminService } from '../services/api';
import {
  Award,
  Lock,
  CheckCircle,
  Sparkles,
  Trophy,
  Shield,
  Target,
  Flame,
  Crown,
  BookOpen
} from 'lucide-react';

const iconMap = {
  Target,
  ShieldAlert: Shield,
  BookOpen,
  Crown,
  Flame,
  Sparkles,
  Award
};

const AchievementsPage = () => {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await adminService.getAchievements();
        if (res.success) {
          setAchievements(res.data);
        }
      } catch (err) {
        console.error('Failed to load achievements:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  const userUnlockedCodes = (user?.achievements || []).map((a) => a.code);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="w-16 h-16 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <Award className="w-8 h-8" />
        </div>
        <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text tracking-tight">
          SACRED ACHIEVEMENTS
        </h1>
        <p className="text-sm text-parchment-300 font-sans leading-relaxed">
          Honors bestowed upon seekers who navigate the moral complexities, martial tests, and spiritual truths of the Mahabharata.
        </p>
        <p className="text-xs text-amber-300 font-bold pt-1">
          {userUnlockedCodes.length} of {achievements.length} Achievements Claimed
        </p>
      </div>

      {/* Grid of Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach) => {
          const isUnlocked = userUnlockedCodes.includes(ach.code);
          const IconComponent = iconMap[ach.icon] || Award;
          const userAchObj = (user?.achievements || []).find((a) => a.code === ach.code);

          return (
            <div
              key={ach.code}
              className={`parchment-card ornate-border rounded-3xl p-6 space-y-4 transition-all relative ${
                isUnlocked
                  ? 'border-gold shadow-gold-glow bg-vedic-surface/80'
                  : 'border-parchment-800/40 opacity-70 bg-vedic-darkest/90'
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${
                    isUnlocked
                      ? 'bg-vedic-dark border-gold text-gold shadow-md'
                      : 'bg-black/50 border-parchment-800 text-parchment-500'
                  }`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {isUnlocked ? (
                  <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-600/40">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    UNLOCKED
                  </span>
                ) : (
                  <span className="flex items-center text-xs font-bold text-parchment-500 bg-black/40 px-2.5 py-1 rounded-full border border-parchment-800/40">
                    <Lock className="w-3.5 h-3.5 mr-1" />
                    LOCKED
                  </span>
                )}
              </div>

              <div>
                <h3 className={`font-epic text-xl font-bold ${isUnlocked ? 'text-gold' : 'text-parchment-300'}`}>
                  {ach.title}
                </h3>
                <p className="text-xs text-parchment-300 font-sans leading-relaxed mt-1">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gold/15 flex items-center justify-between text-xs">
                <span className="text-amber-300 font-bold">
                  +{ach.pointsReward} Bonus Points
                </span>
                {isUnlocked && userAchObj && (
                  <span className="text-[10px] text-parchment-400">
                    Claimed {new Date(userAchObj.unlockedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsPage;
