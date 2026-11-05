import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { birthday } from '@/config/birthday';
import './BackgroundMusic.css';

// Melodic notes for Web Audio API fallback (Gentle music-box birthday lullaby)
const NOTES = [
  261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // Happy Birthday to you
  261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // Happy Birthday to you
  261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // Happy Birthday dear Madam Ji
  466.16, 466.16, 440.00, 349.23, 392.00, 349.23  // Happy Birthday to you
];
const NOTE_DURATIONS = [
  0.4, 0.4, 0.8, 0.8, 0.8, 1.4,
  0.4, 0.4, 0.8, 0.8, 0.8, 1.4,
  0.4, 0.4, 0.8, 0.8, 0.8, 0.8, 1.2,
  0.4, 0.4, 0.8, 0.8, 0.8, 1.6
];

export default function BackgroundMusic({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [useSynth, setUseSynth] = useState(false);
  const audioRef = useRef(null);
  const synthTimerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const noteIdxRef = useRef(0);

  // Play a single soft music box chime note via Web Audio API
  function playNextSynthNote() {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }

    if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current?.resume();
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const note = NOTES[noteIdxRef.current % NOTES.length];
    const duration = NOTE_DURATIONS[noteIdxRef.current % NOTE_DURATIONS.length];
    noteIdxRef.current = (noteIdxRef.current + 1) % NOTES.length;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    // Soft chime bell envelope
    const now = ctx.currentTime;
    const vol = isMuted ? 0 : 0.08;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(vol, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.4);

    synthTimerRef.current = window.setTimeout(playNextSynthNote, duration * 1000);
  }

  function startSynth() {
    stopSynth();
    playNextSynthNote();
  }

  function stopSynth() {
    if (synthTimerRef.current) {
      window.clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  }

  function togglePlay() {
    if (isPlaying) {
      if (useSynth) {
        stopSynth();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      if (useSynth) {
        startSynth();
        setIsPlaying(true);
      } else if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Audio file blocked or missing, switch to gentle synth chime
            setUseSynth(true);
            startSynth();
            setIsPlaying(true);
          });
      }
    }
  }

  function toggleMute() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  }

  // Handle autoStart trigger from parent when user clicks YES/starts
  useEffect(() => {
    if (autoStart && !isPlaying) {
      togglePlay();
    }
  }, [autoStart]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      stopSynth();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="music-bar" aria-label="Background music controls">
      <audio
        ref={audioRef}
        src={birthday.music.src}
        loop
        preload="auto"
        onError={() => {
          // If custom file is missing, fall back to soft music box chime
          setUseSynth(true);
        }}
      />

      <button
        type="button"
        className="music-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={17} /> : <Play size={17} />}
      </button>

      <button
        type="button"
        className="music-btn"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
      </button>

      <div className="music-info" aria-hidden="true">
        <Music size={13} style={{ color: 'var(--soft-red)' }} />
        <span>{isPlaying ? 'Music On' : 'Music Off'}</span>
        <div className="music-waves">
          <span className={`music-wave ${!isPlaying ? 'is-paused' : ''}`} />
          <span className={`music-wave ${!isPlaying ? 'is-paused' : ''}`} />
          <span className={`music-wave ${!isPlaying ? 'is-paused' : ''}`} />
          <span className={`music-wave ${!isPlaying ? 'is-paused' : ''}`} />
        </div>
      </div>
    </div>
  );
}

