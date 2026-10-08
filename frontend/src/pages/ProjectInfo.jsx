import React from 'react';
import {
  GraduationCap,
  Layers,
  Database,
  ShieldCheck,
  Server,
  Cpu,
  CheckCircle,
  ExternalLink,
  Code
} from 'lucide-react';

const ProjectInfo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="w-16 h-16 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text tracking-tight">
          CAPSTONE PROJECT BRIEF
        </h1>
        <p className="text-sm text-parchment-300 font-sans leading-relaxed">
          Full-Stack Web Game Demonstration: <em>Mahabharata – The 18 Parvas Quest</em>. Engineering specifications, system architecture, and evaluation rubric.
        </p>
      </div>

      {/* PROBLEM & SOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="parchment-card ornate-border rounded-3xl p-8 space-y-3">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">The Academic Challenge</span>
          <h2 className="font-epic text-2xl font-bold text-parchment-100">The Problem</h2>
          <p className="text-sm text-parchment-300 font-sans leading-relaxed">
            Traditional learning about classical epic literature often becomes overly passive, text-heavy, and detached from contemporary strategic thinking. Students struggle to navigate the sprawling 100,000 verses, retain the chronological continuity across all 18 Parvas, and grasp the profound ethical and crisis governance (Apaddharma) lessons embedded within the characters' actions.
          </p>
        </div>

        <div className="parchment-card ornate-border rounded-3xl p-8 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-wider">The Technical Innovation</span>
          <h2 className="font-epic text-2xl font-bold text-parchment-100">The Solution</h2>
          <p className="text-sm text-parchment-300 font-sans leading-relaxed">
            An interactive, full-stack educational web game combining ancient manuscript aesthetics with modern gamification principles. Students unlock all 18 Parvas sequentially, analyze character psychology cards and turning-point timelines, watch curated video analyses, test their retention across 180+ factually grounded trials, and earn verified achievements on a persistent global leaderboard.
          </p>
        </div>
      </div>

      {/* TECH STACK BREAKDOWN */}
      <div className="parchment-card ornate-border rounded-3xl p-8 space-y-6">
        <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
          <Layers className="w-6 h-6 text-gold" />
          <span>KEY TECHNOLOGIES & STACK ARCHITECTURE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-vedic-dark border border-gold/30 space-y-2">
            <Cpu className="w-6 h-6 text-gold" />
            <h3 className="font-epic font-bold text-base text-parchment-100">Frontend</h3>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              <strong>React.js (Vite)</strong>, Tailwind CSS, Lucide Icons, Canvas Confetti, Web Audio API (Synthesized Vedic Ambience FX).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-vedic-dark border border-gold/30 space-y-2">
            <Server className="w-6 h-6 text-amber-400" />
            <h3 className="font-epic font-bold text-base text-parchment-100">Backend</h3>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              <strong>Node.js + Express.js</strong>, REST API Architecture, Helmet security headers, CORS, Rate Limiting, Modular Controllers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-vedic-dark border border-gold/30 space-y-2">
            <Database className="w-6 h-6 text-emerald-400" />
            <h3 className="font-epic font-bold text-base text-parchment-100">Database</h3>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              <strong>MongoDB + Mongoose</strong> with automatic persistent JSON fallback engine for seamless zero-setup portability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-vedic-dark border border-gold/30 space-y-2">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h3 className="font-epic font-bold text-base text-parchment-100">Security</h3>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              <strong>JWT (JSON Web Tokens)</strong>, bcryptjs password hashing, Role-Based Access Control (Admin/User), Server-side Score Calculation.
            </p>
          </div>
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE & ER FLOW */}
      <div className="parchment-card ornate-border rounded-3xl p-8 space-y-6">
        <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
          <Code className="w-6 h-6 text-gold" />
          <span>DATA FLOW & REST ARCHITECTURE</span>
        </h2>

        <div className="p-6 rounded-2xl bg-vedic-darkest border border-gold/25 font-mono text-xs text-amber-200/90 leading-relaxed overflow-x-auto">
          <pre>{`[ Client: React SPA / Vite ]
            │
            ▼ (HTTP / REST APIs with JWT Bearer Auth)
[ Express.js Server (PORT 5000) ]
     ├── Rate Limiter & Helmet Middleware
     ├── Auth Controller (/api/auth) ────> bcrypt + JWT Token
     ├── Parvas Controller (/api/parvas) ──> 18 Parvas Lore & Status
     ├── Questions Controller (/api/questions) ──> 180+ Categorized Trials
     ├── Quiz Engine (/api/quiz/submit) ──> Server-side Verification & Scoring
     ├── Progress Engine (/api/progress) ──> Sequential Parva Unlock Logic
     └── Admin Operations (/api/admin) ──> CRUD Content & Role Guard
            │
            ▼
[ Dual-Mode Storage Engine ]
     ├── MongoDB Server (Mongoose ODM) [Primary]
     └── Persistent File Database (data/mahabharata.db.json) [Fallback]`}</pre>
        </div>
      </div>

      {/* CAPSTONE DEMONSTRATION WORKFLOW */}
      <div className="parchment-card ornate-border rounded-3xl p-8 space-y-6">
        <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
          <CheckCircle className="w-6 h-6 text-emerald-400" />
          <span>CAPSTONE LIVE DEMONSTRATION CHECKLIST</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-parchment-200 font-sans">
          {[
            'User Registration & Form Validation (Name, Email, Passwords)',
            'JWT Authentication & Password Hashing via bcrypt',
            'Player Dashboard rendering Live Score, Accuracy, and Rank',
            'Mahabharata Journey displaying all 18 Parvas with status flags',
            'Parva Exploration Page showing characters, events, and lessons',
            'Watch & Learn embedded YouTube video modal execution',
            'Interactive Quiz with immediate answer reveal and context',
            'Server-side answer verification & anti-cheat score computing',
            'Automatic unlocking of the subsequent Parva upon quiz completion',
            'Dynamic unlock & assignment of Achievements (e.g. First Quest)',
            'Global Leaderboard reflecting real-time scores and completion rates',
            'Admin Dashboard providing stats and CRUD control over questions/videos',
            'Persistent state preservation across browser refreshes & logins'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 p-2.5 rounded-xl bg-vedic-dark border border-gold/20">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
