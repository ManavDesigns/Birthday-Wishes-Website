import { useEffect, useState } from 'react';
import { EnvelopeShape, HeartShape, SparkleShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import './CinemaIntro.css';

const OPEN_DURATION_MS = 2100;
const BULBS_PER_ROW = 14;

function Bulbs({ count }) {
  return Array.from({ length: count }, (_, index) => (
    <span
      key={index}
      className="intro__bulb"
      style={{ animationDelay: `${(index * 0.37) % 2}s` }}
    />
  ));
}

export default function CinemaIntro({ onEnter }) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  function handleExplore() {
    setOpening(true);
    window.setTimeout(() => {
      onEnter();
    }, OPEN_DURATION_MS);
  }

  return (
    <div className={`intro ${opening ? 'is-opening' : ''}`} role="dialog" aria-modal="true" aria-label="Curtain Opening Intro">
      <div className="intro__stage" aria-hidden="true" />
      <div className="intro__curtain intro__curtain--left" aria-hidden="true" />
      <div className="intro__curtain intro__curtain--right" aria-hidden="true" />
      <div className="intro__valance" aria-hidden="true" />

      <div className="intro__content">
        <div className="intro__envelope">
          <EnvelopeShape open={opening} />
        </div>

        <div className="intro__sign">
          <span className="sticker sticker--float intro__sticker intro__sticker--top" style={{ '--tilt': '10deg' }}>
            <SparkleShape size={32} fill="#f08cab" />
          </span>
          <span className="sticker sticker--float intro__sticker intro__sticker--bottom" style={{ '--tilt': '-12deg' }}>
            <HeartShape size={32} />
          </span>

          <div className="intro__bulbs intro__bulbs--top" aria-hidden="true">
            <Bulbs count={BULBS_PER_ROW} />
          </div>
          <div className="intro__bulbs intro__bulbs--bottom" aria-hidden="true">
            <Bulbs count={BULBS_PER_ROW} />
          </div>

          <p className="intro__feature">Especially For {birthday.name} 🌸</p>
          <h1 className="intro__title">Are you excited? 🥺✨</h1>
          <p style={{ color: '#8a4f68', fontSize: '1.05rem', margin: 0, fontStyle: 'italic' }}>
            A cute little surprise is waiting behind these curtains...
          </p>

          <button
            type="button"
            className="btn-pink"
            onClick={handleExplore}
            disabled={opening}
            style={{ marginTop: '0.5rem', minWidth: '170px', justifyContent: 'center' }}
          >
            {opening ? 'Opening... ✨' : 'Explore 🎀'}
          </button>
        </div>
      </div>
    </div>
  );
}
