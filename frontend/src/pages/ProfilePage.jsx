import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { authService, progressService } from '../services/api';
import {
  User,
  Shield,
  Trophy,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Lock,
  Mail
} from 'lucide-react';

const ProfilePage = () => {
  const { user, refreshUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const res = await authService.updateProfile({ name, password: password || undefined });
      if (res.success) {
        setMessage('Profile updated successfully.');
        setPassword('');
        await refreshUser();
      }
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetProgress = async () => {
    if (!window.confirm('Are you sure you wish to reset all your Parva progress and score back to Adi Parva? This action is irreversible.')) return;
    try {
      const res = await progressService.resetProgress();
      if (res.success) {
        alert(res.message);
        await refreshUser();
        window.location.reload();
      }
    } catch (err) {
      alert('Reset failed.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="font-epic text-4xl font-bold gold-gradient-text">
          WARRIOR SCROLL & SETTINGS
        </h1>
        <p className="text-xs text-parchment-300 font-sans">
          Manage your personal credentials, identity, and sacred quest records.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Identity Summary */}
        <div className="parchment-card ornate-border rounded-3xl p-6 text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold font-epic font-bold text-3xl shadow-gold-glow">
            {user?.name?.[0]?.toUpperCase() || 'W'}
          </div>
          <div>
            <h3 className="font-epic text-xl font-bold text-parchment-100">{user?.name}</h3>
            <p className="text-xs text-parchment-400 font-sans">{user?.email}</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-vedic-dark border border-gold/30 text-[10px] font-bold text-gold uppercase">
              {user?.role === 'admin' ? 'Royal Administrator' : 'Righteous Seeker'}
            </span>
          </div>

          <div className="pt-4 border-t border-gold/15 space-y-2 text-xs text-parchment-300 font-sans">
            <div className="flex justify-between">
              <span>Total Points:</span>
              <strong className="text-gold">{user?.totalScore || 0} pts</strong>
            </div>
            <div className="flex justify-between">
              <span>Current Parva:</span>
              <strong className="text-amber-300">Parva {user?.currentParva || 1}</strong>
            </div>
            <div className="flex justify-between">
              <span>Parvas Conquered:</span>
              <strong className="text-emerald-400">{user?.completedParvas?.length || 0} / 18</strong>
            </div>
          </div>
        </div>

        {/* Right: Update Form & Danger Zone */}
        <div className="md:col-span-2 space-y-8">
          <div className="parchment-card ornate-border rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-epic text-xl font-bold text-gold">UPDATE CREDENTIALS</h3>

            {message && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>{message}</span>
              </div>
            )}

            {error && (
              <div className="p-3 rounded-xl bg-crimson-night border border-crimson-light text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleUpdate} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-parchment-300 font-semibold mb-1">Display Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 bg-vedic-dark border border-gold/30 rounded-xl text-parchment-100"
                />
              </div>

              <div>
                <label className="block text-parchment-300 font-semibold mb-1">
                  Change Password (Leave blank to keep unchanged)
                </label>
                <input
                  type="password"
                  placeholder="New password (optional)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2.5 bg-vedic-dark border border-gold/30 rounded-xl text-parchment-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-vedic-gold px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider"
              >
                {loading ? 'Updating...' : 'Save Changes'}
              </button>
            </form>
          </div>

          {/* Danger Zone: Reset Quest */}
          <div className="parchment-card ornate-border rounded-3xl p-6 sm:p-8 space-y-4 border-red-900/60 bg-red-950/20">
            <div className="flex items-center space-x-2 text-red-400 font-epic font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span>DANGER ZONE: RESET SACRED QUEST</span>
            </div>
            <p className="text-xs text-parchment-300 leading-relaxed font-sans">
              Resetting your quest will zero out your accumulated points, completed Parvas list, and return your journey back to Parva 1 (Adi Parva). Use this only if you wish to replay the entire epic from the beginning.
            </p>
            <button
              onClick={handleResetProgress}
              className="px-5 py-2.5 rounded-xl bg-red-900/50 hover:bg-red-800 border border-red-600 text-red-200 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset My Mahabharata Progress</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
