import React from 'react';
import { X, ExternalLink, Play } from 'lucide-react';

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl parchment-card ornate-border-glow rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/30 bg-vedic-dark">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-crimson/40 text-gold rounded-full border border-gold/40">
              <Play className="w-4 h-4 fill-gold" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-gold font-epic truncate max-w-lg">
                {video.title}
              </h3>
              <p className="text-xs text-parchment-400">
                Channel: {video.channel || 'Mahabharata Educational Archive'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-parchment-300 hover:text-gold hover:bg-vedic-surface rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer info & link */}
        <div className="p-6 bg-vedic-dark/95 border-t border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-parchment-300 max-w-2xl leading-relaxed">
            {video.description}
          </p>
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 bg-vedic-surface hover:bg-vedic-card text-gold border border-gold/40 rounded-lg transition-all shrink-0"
          >
            <span>Open in YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
