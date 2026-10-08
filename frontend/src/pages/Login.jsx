import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid login credentials. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  const fillCredentials = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setError('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-md parchment-card ornate-border-glow rounded-2xl p-8 sm:p-10 shadow-2xl relative">
        {/* Emblem */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <Shield className="w-8 h-8" />
        </div>

        <h2 className="font-epic text-3xl font-bold text-center gold-gradient-text tracking-wide">
          WARRIOR LOGIN
        </h2>
        <p className="text-xs text-center text-parchment-300 mt-1 mb-6 font-sans">
          Enter your credentials to continue your 18 Parvas journey.
        </p>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-crimson-night border border-crimson-light text-red-200 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-parchment-200 uppercase tracking-wider mb-1.5 font-sans">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="warrior@mahabharata.quest"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-vedic-dark border border-gold/30 text-parchment-100 placeholder-parchment-500 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-parchment-200 uppercase tracking-wider mb-1.5 font-sans">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-parchment-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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
              <span className="inline-block animate-pulse">Consulting Dharma...</span>
            ) : (
              <>
                <span>Enter The Assembly</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Helper for Capstone Demonstrator */}
        <div className="mt-8 pt-6 border-t border-gold/20 text-center">
          <p className="text-[11px] text-parchment-400 mb-2 font-semibold uppercase tracking-wider">
            Quick Fill Demo Accounts:
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => fillCredentials('warrior@mahabharata.quest', 'Warrior@2026')}
              className="text-xs px-3 py-1.5 rounded-lg bg-vedic-surface hover:bg-vedic-card border border-gold/40 text-gold transition-all"
            >
              Demo Player
            </button>
            <button
              type="button"
              onClick={() => fillCredentials('admin@mahabharata.quest', 'DharmaAdmin@2026')}
              className="text-xs px-3 py-1.5 rounded-lg bg-amber-950/40 hover:bg-amber-900/60 border border-amber-600/50 text-amber-300 transition-all"
            >
              Admin Account
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-parchment-300 font-sans">
          New to the Quest?{' '}
          <Link to="/register" className="text-gold font-bold hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
