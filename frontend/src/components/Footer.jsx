import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Shield, Compass, BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-vedic-darkest border-t border-gold/30 mt-20 pt-14 pb-8 overflow-hidden">
      {/* Decorative Top Border Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gold/15">
          {/* Col 1: Epic Title & Sanskrit Motifs */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl text-gold select-none">☸</span>
              <div>
                <h3 className="font-epic text-xl font-bold gold-gradient-text tracking-wide">
                  MAHABHARATA – THE 18 PARVAS QUEST
                </h3>
                <p className="text-xs text-parchment-400 font-sans tracking-widest uppercase">
                  Ancient Epic • Strategic Wisdom • Interactive Game
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-vedic-dark border border-gold/25 relative overflow-hidden">
              <p className="font-sanskrit text-lg text-amber-300 font-bold tracking-wide">
                यतो धर्मस्ततो जयः
              </p>
              <p className="text-xs text-parchment-300 italic mt-1">
                "Yato Dharmas Tato Jayah" — Where there is Dharma, there is Victory.
              </p>
              <p className="text-xs text-parchment-400 mt-2 leading-relaxed">
                An educational full-stack web game built to transform the world's longest epic poem into an interactive journey of ethics, statecraft, and human wisdom.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-epic text-sm font-bold text-gold uppercase tracking-wider">
              Quest Realms
            </h4>
            <ul className="space-y-2 text-sm text-parchment-300">
              <li>
                <Link to="/parvas" className="hover:text-gold transition-colors flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold" />
                  <span>18 Parvas Map</span>
                </Link>
              </li>
              <li>
                <Link to="/random-quiz" className="hover:text-gold transition-colors flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  <span>Random Trial</span>
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="hover:text-gold transition-colors">
                  Global Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-gold transition-colors">
                  Player Achievements
                </Link>
              </li>
              <li>
                <Link to="/project-info" className="hover:text-gold transition-colors">
                  Project Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Reference & Sources */}
          <div className="space-y-3">
            <h4 className="font-epic text-sm font-bold text-gold uppercase tracking-wider">
              References & Sources
            </h4>
            <ul className="space-y-2 text-sm text-parchment-300">
              <li>
                <a
                  href="https://shivathiyaga.github.io/strategic-lessons-mahabharata/#start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center space-x-1.5 group"
                >
                  <span className="truncate">Strategic Lessons Hub</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.sanskritsahitya.org/mahabharatam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center space-x-1.5"
                >
                  <span>Sanskrit Sahitya</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/references" className="hover:text-gold transition-colors flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-gold" />
                  <span>Scholarly Bibliography</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-parchment-400 gap-3">
          <p>© 2026 Mahabharata – The 18 Parvas Quest. College Full-Stack Capstone Project.</p>
          <div className="flex items-center space-x-1 text-parchment-400">
            <span>Built with devotion to Dharma & Knowledge</span>
            <Heart className="w-3 h-3 text-crimson fill-crimson inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
