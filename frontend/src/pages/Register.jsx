import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock, Mail, User, ArrowRight, AlertCircle } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify both entries.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password, confirmPassword);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed. An account with this email may already exist.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-md parchment-card ornate-border-glow rounded-2xl p-8 sm:p-10 shadow-2xl relative">
        {/* Emblem */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <Shield className="w-8 h-8" />
        </div>

        <h2 className="font-epic text-3xl font-bold text-center gold-gradient-text tracking-wide">
          BEGIN THE QUEST
        </h2>
        <p className="text-xs text-center text-parchment-300 mt-1 mb-6 font-sans">
          Inscribe your warrior name into the scrolls of Kurukshetra.
        </p>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-crimson-night border border-crimson-light text-red-200 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-parchment-200 uppercase tracking-wider mb-1 font-sans">
              Player Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Arjuna Vidyarthi"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-parchment-200 uppercase tracking-wider mb-1 font-sans">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-parchment-200 uppercase tracking-wider mb-1 font-sans">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-parchment-200 uppercase tracking-wider mb-1 font-sans">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-vedic-gold py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-gold-glow mt-2"
          >
            {loading ? (
              <span className="inline-block animate-pulse">Consecrating Warrior...</span>
            ) : (
              <>
                <span>Enter The 18 Parvas</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-parchment-300 font-sans">
          Already consecrated?{' '}
          <Link to="/login" className="text-gold font-bold hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
