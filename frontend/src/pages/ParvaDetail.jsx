import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { parvaService } from '../services/api';
import VideoModal from '../components/VideoModal';
import {
  Compass,
  BookOpen,
  Users,
  Calendar,
  Lightbulb,
  Play,
  ArrowRight,
  Shield,
  CheckCircle,
  Lock,
  ArrowLeft,
  Share2,
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';

const ParvaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [parva, setParva] = useState(null);
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchParvaData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await parvaService.getParvaById(id);
        if (res.success) {
          setParva(res.data);
          setVideos(res.data.videos || []);
        } else {
          setError(res.message || 'Unable to retrieve this Parva.');
        }
      } catch (err) {
        setError('Unable to load Parva details. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchParvaData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-epic text-gold text-lg">Inscribing Parva Sacred Knowledge...</p>
        </div>
      </div>
    );
  }

  if (error || !parva) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-epic text-2xl text-crimson-light font-bold">Manuscript Not Found</h2>
        <p className="text-sm text-parchment-300">{error || 'This Parva could not be located in the scrolls.'}</p>
        <Link to="/parvas" className="btn-vedic-gold inline-flex px-6 py-2.5 rounded-xl text-xs font-bold">
          Return to 18 Parvas Map
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Top Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          to="/parvas"
          className="inline-flex items-center space-x-2 text-xs font-bold text-parchment-300 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 18 Parvas</span>
        </Link>

        <div className="flex items-center space-x-2 text-xs font-bold text-gold">
          <span>PARVA {parva.number} OF 18</span>
        </div>
      </div>

      {/* HERO BANNER */}
      <div className="parchment-card ornate-border-glow rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-vedic-surface border border-gold/40 text-xs font-bold text-gold tracking-widest uppercase">
                Parva #{parva.number}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/40 text-amber-300 font-semibold">
                Difficulty: {parva.difficulty}
              </span>
              {parva.isCompleted && (
                <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-600/40">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  Conquered
                </span>
              )}
            </div>

            <h1 className="font-epic text-4xl sm:text-6xl font-black gold-gradient-text tracking-tight">
              {parva.name}
            </h1>
            <p className="font-sanskrit text-lg sm:text-xl text-amber-200">
              {parva.sanskritName} • <span className="font-serif italic text-parchment-200">{parva.title}</span>
            </p>

            <p className="text-sm sm:text-base text-parchment-200 leading-relaxed font-sans pt-2">
              {parva.description}
            </p>

            {parva.quote && (
              <blockquote className="border-l-2 border-gold pl-4 py-1 italic text-xs sm:text-sm text-gold/90 font-serif">
                "{parva.quote.text}"
                {parva.quote.speaker && (
                  <span className="block not-italic text-parchment-400 text-xs mt-1">
                    — {parva.quote.speaker}
                  </span>
                )}
              </blockquote>
            )}
          </div>

          {/* Start Quiz Callout */}
          <div className="shrink-0 w-full md:w-auto p-6 rounded-2xl bg-vedic-dark border border-gold/40 text-center space-y-4">
            <div className="space-y-1">
              <p className="text-xs text-parchment-400 font-semibold uppercase">Sacred Trial</p>
              <p className="text-xl font-bold text-gold font-epic">10 Questions</p>
              <p className="text-[11px] text-amber-300">+{parva.pointsReward} Reward Points</p>
            </div>

            <Link
              to={`/quiz/${parva.number}`}
              className="btn-vedic-gold w-full px-8 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 shadow-gold-glow"
            >
              <Flame className="w-4 h-4 fill-amber-950 text-amber-950" />
              <span>START QUIZ NOW</span>
            </Link>
          </div>
        </div>
      </div>

      {/* STORY SUMMARY */}
      <section className="parchment-card ornate-border rounded-3xl p-8 space-y-4">
        <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-gold" />
          <span>THE STORY SUMMARY</span>
        </h2>
        <p className="text-sm sm:text-base text-parchment-200 leading-relaxed font-sans whitespace-pre-line">
          {parva.storySummary}
        </p>
      </section>

      {/* IMPORTANT CHARACTERS */}
      <section className="space-y-6">
        <div>
          <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
            <Users className="w-6 h-6 text-gold" />
            <span>KEY FIGURES & HEROES</span>
          </h2>
          <p className="text-xs text-parchment-300 font-sans mt-1">
            The pivotal actors driving the psychological and military drama of this Parva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(parva.importantCharacters || []).map((char, index) => (
            <div
              key={index}
              className="parchment-card ornate-border rounded-2xl p-6 space-y-3 hover:border-gold transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-vedic-dark border border-gold/50 flex items-center justify-center text-gold font-epic font-bold text-lg shadow-sm">
                  {char.name[0]}
                </div>
                <div>
                  <h3 className="font-epic text-lg font-bold text-parchment-100">{char.name}</h3>
                  <p className="text-xs text-gold font-sans">{char.role}</p>
                </div>
              </div>
              <p className="text-xs text-parchment-300 leading-relaxed font-sans pt-1">
                {char.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPORTANT EVENTS TIMELINE */}
      <section className="space-y-6">
        <div>
          <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-gold" />
            <span>TURNING POINTS & KEY EVENTS</span>
          </h2>
          <p className="text-xs text-parchment-300 font-sans mt-1">
            Historical milestones that shaped the outcome of the Kuru dynasty.
          </p>
        </div>

        <div className="space-y-4">
          {(parva.importantEvents || []).map((evt, idx) => (
            <div
              key={idx}
              className="parchment-card ornate-border rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-crimson-dark border border-gold/40 text-[11px] font-bold text-gold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h3 className="font-epic text-lg font-bold text-parchment-100">{evt.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-parchment-200 font-sans leading-relaxed">
                  {evt.description}
                </p>
              </div>

              {evt.significance && (
                <div className="p-3 rounded-xl bg-vedic-dark border border-gold/20 text-xs text-amber-300/90 font-sans max-w-xs shrink-0">
                  <span className="font-bold text-gold block text-[10px] uppercase tracking-wider mb-0.5">
                    Strategic Significance
                  </span>
                  {evt.significance}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* KEY STRATEGIC LESSONS */}
      <section className="space-y-6">
        <div>
          <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-gold" />
            <span>STRATEGIC & ETHICAL LESSONS</span>
          </h2>
          <p className="text-xs text-parchment-300 font-sans mt-1">
            Insights on leadership, crisis governance, and personal ethics applicable to modern life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(parva.keyLessons || []).map((lesson, idx) => (
            <div
              key={idx}
              className="parchment-card ornate-border rounded-2xl p-6 space-y-3 hover:border-gold transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-vedic-surface border border-gold/40 flex items-center justify-center text-amber-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-epic text-lg font-bold text-gold">{lesson.title}</h3>
              <p className="text-xs text-parchment-300 leading-relaxed font-sans">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WATCH & LEARN (YOUTUBE REFERENCE VIDEOS) */}
      <section className="space-y-6">
        <div>
          <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
            <Play className="w-6 h-6 text-crimson fill-crimson" />
            <span>WATCH & LEARN: DOCUMENTARY & VIDEO REFERENCES</span>
          </h2>
          <p className="text-xs text-parchment-300 font-sans mt-1">
            Curated educational videos exploring the narrative, battle tactics, and philosophy of {parva.name}.
          </p>
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideo(vid)}
                className="parchment-card ornate-border rounded-2xl overflow-hidden cursor-pointer group hover:border-gold transition-all"
              >
                {/* Thumbnail container */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={vid.thumbnail || `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-crimson/90 border border-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-gold text-gold ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-parchment-200 font-bold">
                    {vid.duration || '12:00'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <p className="text-[11px] text-gold font-semibold uppercase">{vid.channel}</p>
                  <h3 className="font-epic text-sm font-bold text-parchment-100 group-hover:text-gold transition-colors line-clamp-2">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-parchment-300 line-clamp-2 font-sans">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-parchment-400 text-xs parchment-card ornate-border rounded-2xl">
            Reference videos will appear here. You can also view external archives on the References page.
          </div>
        )}
      </section>

      {/* BOTTOM CTA: START TRIAL */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-crimson-dark via-vedic-surface to-vedic-dark border border-gold/50 text-center space-y-4">
        <h3 className="font-epic text-2xl sm:text-3xl font-bold text-parchment-100">
          Ready to Test Your Mastery of {parva.name}?
        </h3>
        <p className="text-xs sm:text-sm text-parchment-300 max-w-xl mx-auto font-sans">
          Answer 10 challenging questions on the events, character choices, and philosophy of this Parva to earn points and unlock the next chapter!
        </p>
        <Link
          to={`/quiz/${parva.number}`}
          className="btn-vedic-gold inline-flex items-center space-x-2 px-10 py-4 rounded-xl text-sm font-bold shadow-gold-glow-lg"
        >
          <span>BEGIN THE 10-QUESTION TRIAL</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Interactive Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
};

export default ParvaDetail;
