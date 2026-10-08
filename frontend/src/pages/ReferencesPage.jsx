import React from 'react';
import { BookOpen, ExternalLink, Shield, Bookmark, Sparkles, Video, GraduationCap } from 'lucide-react';

const ReferencesPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="w-16 h-16 mx-auto rounded-full bg-vedic-dark border-2 border-gold flex items-center justify-center text-gold shadow-gold-glow">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="font-epic text-4xl sm:text-5xl font-black gold-gradient-text tracking-tight">
          REFERENCES & SOURCES
        </h1>
        <p className="text-sm text-parchment-300 font-sans leading-relaxed">
          Scholarly, canonical, and educational sources cited and consulted in the development of <em>Mahabharata – The 18 Parvas Quest</em>.
        </p>
      </div>

      {/* PRIMARY SOURCE HERO CARD: PROJECT HUB */}
      <div className="parchment-card ornate-border-glow rounded-3xl p-8 sm:p-10 space-y-4 border-gold">
        <div className="flex items-center space-x-2 text-xs font-bold text-gold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>Primary Innovation & Strategic Inspiration Reference</span>
        </div>

        <h2 className="font-epic text-2xl sm:text-3xl font-bold text-parchment-100">
          Strategic Lessons from Mahābhārata | Project Hub
        </h2>
        <p className="text-xs text-parchment-400 font-mono">
          Source Link:{' '}
          <a
            href="https://shivathiyaga.github.io/strategic-lessons-mahabharata/#start"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 underline break-all hover:text-gold"
          >
            https://shivathiyaga.github.io/strategic-lessons-mahabharata/#start
          </a>
        </p>

        <p className="text-sm text-parchment-200 font-sans leading-relaxed pt-2">
          This project hub provided the guiding thesis:{' '}
          <em className="text-gold font-serif">
            “Don’t just study the Mahābhārata. Build something from it. Turn an ancient insight into a contemporary innovation.”
          </em>{' '}
          Our application implements this directive through an original educational full-stack web game modeling all 18 Parvas, evaluating strategic leadership dilemmas, crisis governance (Apaddharma), and ethical choices.
        </p>

        <div className="pt-2">
          <a
            href="https://shivathiyaga.github.io/strategic-lessons-mahabharata/#start"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vedic-gold inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            <span>Visit Project Hub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* CANONICAL SCHOLARLY EDITIONS */}
      <div className="space-y-6">
        <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
          <Bookmark className="w-6 h-6 text-gold" />
          <span>CANONICAL TEXTS & TRANSLATIONS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="parchment-card ornate-border rounded-2xl p-6 space-y-3">
            <h3 className="font-epic text-lg font-bold text-gold">
              The Critical Edition (BORI, Pune)
            </h3>
            <p className="text-xs text-parchment-400 font-semibold">
              Bhandarkar Oriental Research Institute (1919–1966)
            </p>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              The monumental 19-volume Critical Edition compiled across five decades by scholars led by V.S. Sukthankar. Used as the factual benchmark for the 18 Parvas structure, adhyayas, and textual authenticity.
            </p>
          </div>

          <div className="parchment-card ornate-border rounded-2xl p-6 space-y-3">
            <h3 className="font-epic text-lg font-bold text-gold">
              Kisari Mohan Ganguli Translation
            </h3>
            <p className="text-xs text-parchment-400 font-semibold">
              Published between 1883 and 1896 (Calcutta)
            </p>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              The first complete unabridged English prose translation of the Sanskrit epic. Consulted for narrative episode precision, speeches of Krishna and Bhishma, and character dialogues.
            </p>
          </div>

          <div className="parchment-card ornate-border rounded-2xl p-6 space-y-3">
            <h3 className="font-epic text-lg font-bold text-gold">
              Gita Press Gorakhpur Edition
            </h3>
            <p className="text-xs text-parchment-400 font-semibold">
              Sanskrit Text with Hindi / English Exegesis
            </p>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              Revered classical edition used for accurate Sanskrit naming, Shloka metrics, and the philosophical sections of Shanti Parva, Anushasana Parva (Vishnu Sahasranama), and Bhishma Parva (Bhagavad Gita).
            </p>
          </div>

          <div className="parchment-card ornate-border rounded-2xl p-6 space-y-3">
            <h3 className="font-epic text-lg font-bold text-gold">
              SanskritSahitya Mahābhārata Archive
            </h3>
            <p className="text-xs text-parchment-400 font-semibold">
              Digital Corpus of Sanskrit Texts
            </p>
            <p className="text-xs text-parchment-300 font-sans leading-relaxed">
              Referenced for digitised adhyaya mappings, textual cross-referencing, and verification of Indic terminology across all 18 Parvas.
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATIONAL VIDEO ARCHIVES */}
      <div className="space-y-6">
        <h2 className="font-epic text-2xl font-bold text-parchment-100 flex items-center space-x-2">
          <Video className="w-6 h-6 text-crimson fill-crimson" />
          <span>AUDIOVISUAL & DIGITAL ARCHIVES</span>
        </h2>

        <div className="parchment-card ornate-border rounded-2xl p-6 space-y-4">
          <p className="text-xs text-parchment-300 font-sans leading-relaxed">
            All embedded and referenced YouTube video resources used in the <em>Watch & Learn</em> sections of each Parva are streamed via official YouTube embeds. No copyrighted material is hosted or downloaded locally. Sources include:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-parchment-200 font-sans">
            <li className="flex items-center space-x-2 p-2.5 rounded-lg bg-vedic-dark border border-gold/20">
              <span className="text-gold">✦</span>
              <span>Indic Heritage & Strategic Studies Archive</span>
            </li>
            <li className="flex items-center space-x-2 p-2.5 rounded-lg bg-vedic-dark border border-gold/20">
              <span className="text-gold">✦</span>
              <span>Epified Mahabharata Animation Series</span>
            </li>
            <li className="flex items-center space-x-2 p-2.5 rounded-lg bg-vedic-dark border border-gold/20">
              <span className="text-gold">✦</span>
              <span>B.R. Chopra & Star Bharat Archival Educational Clips</span>
            </li>
            <li className="flex items-center space-x-2 p-2.5 rounded-lg bg-vedic-dark border border-gold/20">
              <span className="text-gold">✦</span>
              <span>TED-Ed Mythology & Ethical Thought Experiments</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
