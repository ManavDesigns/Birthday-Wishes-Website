import { useEffect, useState } from 'react';
import { ACCENT_SHAPES } from '@/components/art/Illustrations';
import './GiftBox.css';

const SHAKE_MS = 650;

function PatternDef({ id, kind, color }) {
  if (kind === 'stripes') {
    return (
      <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="7" height="14" fill={color} />
      </pattern>
    );
  }
  if (kind === 'checks') {
    return (
      <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill={color} />
        <rect x="10" y="10" width="10" height="10" fill={color} />
      </pattern>
    );
  }
  return (
    <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="8" r="3" fill={color} />
    </pattern>
  );
}

export default function GiftBox({ gift, index, isOpen, onOpen }) {
  const [shaking, setShaking] = useState(false);
  const { palette } = gift;
  const patternId = `gift-pattern-${gift.id}`;
  const Accent = ACCENT_SHAPES[gift.accent];

  useEffect(() => {
    if (!shaking) return undefined;
    const timer = setTimeout(() => {
      setShaking(false);
      onOpen();
    }, SHAKE_MS);
    return () => clearTimeout(timer);
  }, [shaking, onOpen]);

  function handleClick() {
    if (!isOpen && !shaking) {
      setShaking(true);
    } else if (!shaking) {
      onOpen();
    }
  }

  return (
    <button
      type="button"
      className={`gift-box ${isOpen ? 'is-open' : ''} ${shaking ? 'is-shaking' : ''}`}
      onClick={handleClick}
      aria-pressed={isOpen}
      aria-label={`Unwrap gift: ${gift.title}`}
      style={{ '--delay': `${index * -0.45}s` }}
    >
      <span className="gift-box__art">
        <svg viewBox="0 0 120 120" className="gift-box__svg" aria-hidden="true" focusable="false">
          <defs>
            <PatternDef id={patternId} kind={gift.pattern} color={palette.pattern} />
          </defs>
          <ellipse cx="60" cy="112" rx="40" ry="5" fill="#f08cab" opacity="0.35" />
          <rect x="20" y="54" width="80" height="56" rx="8" fill={palette.body} />
          <rect x="20" y="54" width="80" height="56" rx="8" fill={`url(#${patternId})`} opacity="0.6" />
          <rect x="54" y="54" width="12" height="56" fill={palette.ribbon} />
          <g className="gift-box__lid">
            <rect x="14" y="38" width="92" height="22" rx="8" fill={palette.lid} />
            <rect x="54" y="38" width="12" height="22" fill={palette.ribbon} />
            <path d="M60 40C48 22 30 24 34 36C36 43 50 42 60 40Z" fill={palette.ribbon} />
            <path d="M60 40C72 22 90 24 86 36C84 43 70 42 60 40Z" fill={palette.ribbon} />
            <circle cx="60" cy="40" r="5" fill={palette.knot} />
          </g>
        </svg>
        <span className="gift-box__emoji" aria-hidden="true">{gift.emoji}</span>
        <span className="sticker sticker--float gift-box__accent" style={{ '--tilt': index % 2 ? '8deg' : '-8deg' }} aria-hidden="true">
          <Accent size={30} />
        </span>
      </span>
      <span className="gift-box__label">{gift.title}</span>
    </button>
  );
}
