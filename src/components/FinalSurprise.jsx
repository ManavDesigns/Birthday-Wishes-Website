import { Sparkles } from 'lucide-react';
import { BalloonShape, BearShape, CakeShape, HeartShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import { useInView } from '@/hooks/useInView';
import './FinalSurprise.css';

const CONFETTI_COLORS = ['#f7b6c9', '#ffe7a3', '#b9e6cc', '#ffffff', '#e0526f', '#bfe3f5'];

const HEARTS = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  size: 14 + (index % 4) * 6,
  delay: `${(index * 0.7) % 9}s`,
  duration: `${9 + (index % 5) * 1.5}s`,
}));

const BALLOONS = [
  { left: '5%', top: '10%', fill: '#f7a1bd', size: 70, delay: '0s' },
  { left: '86%', top: '8%', fill: '#ffe08a', size: 60, delay: '-2s' },
  { left: '90%', top: '60%', fill: '#b9e6cc', size: 56, delay: '-4s' },
  { left: '3%', top: '66%', fill: '#f08cab', size: 64, delay: '-1s' },
];

const CONFETTI = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  delay: `${(index * 0.13) % 4}s`,
  duration: `${4 + (index % 6) * 0.6}s`,
  sway: `${(index % 2 ? 1 : -1) * (20 + (index % 7) * 6)}px`,
}));

export default function FinalSurprise({ onCelebrateAgain }) {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="finale" className={`finale ${inView ? 'is-visible' : ''}`}>
      <div className="finale__hearts" aria-hidden="true">
        {HEARTS.map((heart) => (
          <span
            key={heart.id}
            className="finale__heart"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            <HeartShape size={heart.size} />
          </span>
        ))}
      </div>

      <div className="finale__balloons" aria-hidden="true">
        {BALLOONS.map((balloon) => (
          <div
            key={balloon.left}
            className="finale__balloon"
            style={{ left: balloon.left, top: balloon.top, animationDelay: balloon.delay }}
          >
            <BalloonShape size={balloon.size} fill={balloon.fill} />
          </div>
        ))}
      </div>

      <div className="finale__confetti" aria-hidden="true">
        {CONFETTI.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              background: piece.color,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              '--sway': piece.sway,
            }}
          />
        ))}
      </div>

      <div className="finale__frame">
        <span className="sticker finale__sticker" style={{ '--tilt': '12deg' }}>
          <HeartShape size={36} />
        </span>
        <div className="finale__art" aria-hidden="true">
          <BearShape className="finale__bear" />
          <CakeShape className="finale__cake" />
          <BearShape className="finale__bear finale__bear--late" />
        </div>
        <p className="eyebrow">A Special Celebration</p>
        <h2 className="section-title">{birthday.finalTitle}</h2>
        <div className="finale__message">
          {birthday.finalMessage.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="finale__signature">{birthday.signature}</p>

        {/* Celebrate Again Button: Restarts the complete experience from Curtain Intro */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
          <button
            type="button"
            className="btn-pink"
            onClick={onCelebrateAgain}
            aria-label="Celebrate again from the curtain intro"
          >
            <Sparkles size={18} />
            Celebrate again ✨
          </button>
        </div>
      </div>
    </section>
  );
}
