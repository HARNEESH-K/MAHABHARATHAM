import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('soundEnabled') === 'true';
  });

  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const droneNodesRef = useRef([]);

  // Initialize Web Audio Context lazily on user interaction
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    localStorage.setItem('soundEnabled', String(nextState));
    if (!nextState && isAmbiencePlaying) {
      stopAmbience();
    }
  };

  // Play harmonious chime on correct answer
  const playCorrect = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Royal chord)
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.85);
      });
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  };

  // Play solemn low tone on incorrect answer
  const playIncorrect = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(196, now); // G3
      osc.frequency.exponentialRampToValueAtTime(146.83, now + 0.4); // D3

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.55);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  };

  // Play triumphant fanfare for quest completion
  const playVictory = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const arpeggio = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      arpeggio.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.2, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.65);
      });
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  };

  // Synthesized meditative Vedic Tanpura drone (C# fundamental)
  const startAmbience = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      stopAmbience();

      const freqs = [138.59, 207.65, 277.18, 554.37]; // C#3, G#3, C#4, C#5
      droneNodesRef.current = freqs.map((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        // Low volume meditative drone
        gain.gain.setValueAtTime(0.02 / (i + 1), ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        return { osc, gain };
      });

      setIsAmbiencePlaying(true);
    } catch (e) {
      console.warn('Ambience start error:', e);
    }
  };

  const stopAmbience = () => {
    droneNodesRef.current.forEach(({ osc, gain }) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    droneNodesRef.current = [];
    setIsAmbiencePlaying(false);
  };

  const toggleAmbience = () => {
    if (!soundEnabled) {
      toggleSound();
      startAmbience();
      return;
    }
    if (isAmbiencePlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playCorrect,
        playIncorrect,
        playVictory,
        isAmbiencePlaying,
        toggleAmbience
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
