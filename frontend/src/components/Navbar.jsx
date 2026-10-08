import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAudio } from '../context/AudioContext';
import {
  Compass,
  Trophy,
  Award,
  BookOpen,
  Volume2,
  VolumeX,
  Music,
  Menu,
  X,
  Shield,
  User,
  LogOut,
  Flame,
  Info
} from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { soundEnabled, toggleSound, isAmbiencePlaying, toggleAmbience } = useAudio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: '18 Parvas', path: '/parvas', icon: Compass },
    { label: 'Random Quest', path: '/random-quiz', icon: Flame },
    { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { label: 'Achievements', path: '/achievements', icon: Award },
    { label: 'References', path: '/references', icon: BookOpen },
    { label: 'Capstone Info', path: '/project-info', icon: Info },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-vedic-darkest/95 backdrop-blur-md border-b border-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-vedic-dark border-2 border-gold shadow-gold-glow group-hover:scale-105 transition-transform">
              <span className="text-2xl select-none animate-spin-slow">☸</span>
            </div>
            <div className="flex flex-col">
              <span className="font-epic text-xl sm:text-2xl font-black tracking-wider gold-gradient-text leading-tight">
                MAHABHARATA
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-parchment-300 uppercase font-sans font-semibold">
                The 18 Parvas Quest
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-gold bg-vedic-surface border border-gold/40 shadow-sm'
                      : 'text-parchment-300 hover:text-gold hover:bg-vedic-surface/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {isAdmin && (
              <Link
                to="/admin"
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/admin')
                    ? 'text-amber-400 bg-vedic-surface border border-amber-400/50'
                    : 'text-amber-400/80 hover:text-amber-300 hover:bg-vedic-surface/60'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            )}
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
              className={`p-2 rounded-lg border transition-all ${
                soundEnabled
                  ? 'text-gold border-gold/50 bg-vedic-surface shadow-sm'
                  : 'text-parchment-400 border-parchment-800 hover:text-parchment-200'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Tanpura Ambience Toggle */}
            <button
              onClick={toggleAmbience}
              title={isAmbiencePlaying ? 'Stop Vedic Ambience Drone' : 'Play Vedic Ambience Drone'}
              className={`p-2 rounded-lg border transition-all flex items-center space-x-1 ${
                isAmbiencePlaying
                  ? 'text-amber-400 border-amber-400 bg-vedic-surface shadow-gold-glow animate-pulse'
                  : 'text-parchment-400 border-parchment-800 hover:text-parchment-200'
              }`}
            >
              <Music className="w-4 h-4" />
            </button>

            {/* User State */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3 pl-2 border-l border-gold/20">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-vedic-surface border border-gold/30 hover:border-gold transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-crimson border border-gold flex items-center justify-center text-xs font-bold text-gold">
                    {user?.name?.[0]?.toUpperCase() || 'W'}
                  </div>
                  <div className="text-left hidden xl:block">
                    <p className="text-xs font-semibold text-parchment-100 truncate max-w-[100px]">
                      {user?.name?.split(' ')[0]}
                    </p>
                    <p className="text-[10px] text-gold font-bold">
                      {user?.totalScore || 0} pts
                    </p>
                  </div>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 text-parchment-400 hover:text-crimson-light transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 pl-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-sm font-semibold text-parchment-200 hover:text-gold transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-vedic-gold px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Begin Quest
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleSound}
              className="p-2 text-gold border border-gold/40 rounded-lg bg-vedic-surface"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-parchment-200 hover:text-gold rounded-lg border border-gold/30 bg-vedic-surface"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-vedic-dark/98 border-b border-gold/30 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-gold bg-vedic-surface border border-gold/40'
                      : 'text-parchment-200 hover:bg-vedic-surface/60'
                  }`}
                >
                  <Icon className="w-4 h-4 text-gold" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-amber-400 bg-vedic-surface border border-amber-400/40"
              >
                <Shield className="w-4 h-4" />
                <span>Admin Panel</span>
              </Link>
            )}

            <div className="pt-3 border-t border-gold/20 flex flex-col space-y-2">
              <button
                onClick={toggleAmbience}
                className="flex items-center justify-between px-4 py-2 rounded-lg bg-vedic-surface border border-gold/30 text-xs text-parchment-200"
              >
                <span>Vedic Tanpura Ambience</span>
                <span className={isAmbiencePlaying ? 'text-gold font-bold' : 'text-parchment-400'}>
                  {isAmbiencePlaying ? 'PLAYING' : 'OFF'}
                </span>
              </button>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-vedic-surface border border-gold/40 text-sm font-bold text-gold"
                  >
                    <span>Player Dashboard</span>
                    <span>{user?.totalScore || 0} pts</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-crimson-dark/80 text-parchment-100 text-sm font-bold"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-vedic-surface border border-gold/40 text-sm font-bold text-parchment-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-vedic-gold flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-vedic-darkest"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
