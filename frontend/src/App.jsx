import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoldenParticles from './components/GoldenParticles';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Parvas from './pages/Parvas';
import ParvaDetail from './pages/ParvaDetail';
import QuizPage from './pages/QuizPage';
import RandomQuiz from './pages/RandomQuiz';
import FinalChallenge from './pages/FinalChallenge';
import Leaderboard from './pages/Leaderboard';
import AchievementsPage from './pages/AchievementsPage';
import ReferencesPage from './pages/ReferencesPage';
import ProjectInfo from './pages/ProjectInfo';
import AdminDashboard from './pages/AdminDashboard';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-vedic-darkest text-parchment-100 overflow-x-hidden">
      {/* Ambient Canvas Particles */}
      <GoldenParticles />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Player Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Canonical Parva Exploration & Gameplay */}
          <Route path="/parvas" element={<Parvas />} />
          <Route path="/parva/:id" element={<ParvaDetail />} />
          <Route
            path="/quiz/:parvaId"
            element={
              <ProtectedRoute>
                <QuizPage />
              </ProtectedRoute>
            }
          />

          {/* Additional Game Modes */}
          <Route path="/random-quiz" element={<RandomQuiz />} />
          <Route
            path="/final-challenge"
            element={
              <ProtectedRoute>
                <FinalChallenge />
              </ProtectedRoute>
            }
          />

          {/* Social & Academic Standings */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/project-info" element={<ProjectInfo />} />

          {/* Admin Management Sanctum */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Grand Vedic Footer */}
      <Footer />
    </div>
  );
}

export default App;
