import { useState } from 'react';
import { X, CheckCircle2, Gift as GiftIcon, Heart, Star } from 'lucide-react';
import GiftBox from '@/components/GiftBox';
import { BearShape, HeartShape, StarShape, SparkleShape, FlowerShape, ButterflyShape, CakeShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import { useInView } from '@/hooks/useInView';
import './GiftSection.css';

// Floating background decorations for the Gift Room
const ROOM_DECORATIONS = [
  { id: 1, type: 'bear', left: '5%', top: '12%', size: 44, delay: '0s', duration: '5s' },
  { id: 2, type: 'star', left: '92%', top: '18%', size: 28, delay: '-2s', duration: '4s' },
  { id: 3, type: 'heart', left: '3%', top: '65%', size: 26, delay: '-1s', duration: '4.5s' },
  { id: 4, type: 'bear', left: '94%', top: '72%', size: 40, delay: '-3s', duration: '5.5s' },
  { id: 5, type: 'star', left: '12%', top: '88%', size: 24, delay: '-2.5s', duration: '3.8s' },
  { id: 6, type: 'heart', left: '86%', top: '90%', size: 30, delay: '-0.5s', duration: '4.2s' },
];

// Floating heart particles inside the modal backdrop
const MODAL_HEARTS = [
  { id: 1, left: '8%', top: '18%', size: 22, delay: '0s' },
  { id: 2, left: '88%', top: '14%', size: 24, delay: '0.8s' },
  { id: 3, left: '12%', top: '78%', size: 18, delay: '1.6s' },
  { id: 4, left: '85%', top: '82%', size: 20, delay: '1.2s' },
  { id: 5, left: '48%', top: '6%', size: 26, delay: '0.4s' },
];

// Soft rainbow arc effect for the modal header
function RainbowArc() {
  return (
    <svg viewBox="0 0 200 55" className="gift-modal-rainbow" aria-hidden="true" focusable="false">
      <path d="M 15 55 A 85 85 0 0 1 185 55" fill="none" stroke="#ffd1dc" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 25 55 A 75 75 0 0 1 175 55" fill="none" stroke="#ffe7a3" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 35 55 A 65 65 0 0 1 165 55" fill="none" stroke="#d4f0df" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 45 55 A 55 55 0 0 1 155 55" fill="none" stroke="#cfe9f7" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

// CUTE VIRTUAL HUG ILLUSTRATION (for Warm Hugs gift)
function VirtualHugArt() {
  return (
    <svg viewBox="0 0 160 120" width="150" height="110" className="gift-modal-art-svg" aria-hidden="true">
      {/* Little floating hearts above hug */}
      <path d="M 80 18 s -5 -3.5 -5 -7 c 0 -2.5 1.5 -4 3.5 -4 c 1 0 2 0.8 2.5 1.8 c 0.5 -1 1.5 -1.8 2.5 -1.8 c 2 0 3.5 1.5 3.5 4 c 0 3.5 -5 7 -7 7 z" fill="#f08cab" />
      <path d="M 64 26 s -4 -2.8 -4 -5.5 c 0 -2 1.2 -3.2 2.8 -3.2 c 0.8 0 1.6 0.6 2 1.4 c 0.4 -0.8 1.2 -1.4 2 -1.4 c 1.6 0 2.8 1.2 2.8 3.2 c 0 2.7 -4 5.5 -5.6 5.5 z" fill="#ffb6c1" />
      <path d="M 96 26 s -4 -2.8 -4 -5.5 c 0 -2 1.2 -3.2 2.8 -3.2 c 0.8 0 1.6 0.6 2 1.4 c 0.4 -0.8 1.2 -1.4 2 -1.4 c 1.6 0 2.8 1.2 2.8 3.2 c 0 2.7 -4 5.5 -5.6 5.5 z" fill="#ffb6c1" />

      {/* Bear 1 (Left - Pinkish Honey Bear) */}
      <g transform="translate(32, 38)">
        {/* Ears */}
        <circle cx="16" cy="14" r="8" fill="#f5c29b" />
        <circle cx="16" cy="14" r="4.5" fill="#ffd6e3" />
        <circle cx="44" cy="14" r="8" fill="#f5c29b" />
        <circle cx="44" cy="14" r="4.5" fill="#ffd6e3" />
        {/* Head */}
        <circle cx="30" cy="28" r="19" fill="#f5c29b" />
        {/* Snout */}
        <ellipse cx="32" cy="33" rx="9" ry="6" fill="#fff0e0" />
        <circle cx="32" cy="31" r="2.2" fill="#6b3349" />
        {/* Eyes (Happy closed curves ^ ^) */}
        <path d="M 23 26 Q 26 23 29 26" fill="none" stroke="#6b3349" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 35 26 Q 38 23 41 26" fill="none" stroke="#6b3349" strokeWidth="1.8" strokeLinecap="round" />
        {/* Blush cheeks */}
        <circle cx="21" cy="32" r="3" fill="#f08cab" opacity="0.65" />
        <circle cx="41" cy="32" r="3" fill="#f08cab" opacity="0.65" />
        {/* Body */}
        <ellipse cx="32" cy="52" rx="16" ry="18" fill="#f5c29b" />
        <ellipse cx="32" cy="53" rx="9" ry="11" fill="#fff0e0" />
      </g>

      {/* Bear 2 (Right - Soft Blush Cuddle Bear) */}
      <g transform="translate(68, 38)">
        {/* Ears */}
        <circle cx="16" cy="14" r="8" fill="#f7bfcb" />
        <circle cx="16" cy="14" r="4.5" fill="#ffffff" />
        <circle cx="44" cy="14" r="8" fill="#f7bfcb" />
        <circle cx="44" cy="14" r="4.5" fill="#ffffff" />
        {/* Head */}
        <circle cx="30" cy="28" r="19" fill="#f7bfcb" />
        {/* Snout */}
        <ellipse cx="28" cy="33" rx="9" ry="6" fill="#ffffff" />
        <circle cx="28" cy="31" r="2.2" fill="#6b3349" />
        {/* Eyes (Happy closed curves ^ ^) */}
        <path d="M 19 26 Q 22 23 25 26" fill="none" stroke="#6b3349" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 31 26 Q 34 23 37 26" fill="none" stroke="#6b3349" strokeWidth="1.8" strokeLinecap="round" />
        {/* Blush cheeks */}
        <circle cx="18" cy="32" r="3" fill="#e0526f" opacity="0.6" />
        <circle cx="38" cy="32" r="3" fill="#e0526f" opacity="0.6" />
        {/* Body */}
        <ellipse cx="28" cy="52" rx="16" ry="18" fill="#f7bfcb" />
        <ellipse cx="28" cy="53" rx="9" ry="11" fill="#ffffff" />
      </g>

      {/* Hugging Arms Wrapping Each Other */}
      <path d="M 62 76 C 72 70 88 70 98 76" fill="none" stroke="#f5c29b" strokeWidth="8" strokeLinecap="round" />
      <path d="M 98 78 C 88 84 72 84 62 78" fill="none" stroke="#f7bfcb" strokeWidth="8" strokeLinecap="round" />

      {/* Heart held in center */}
      <path d="M 80 84 s -4.5 -3.5 -4.5 -6.5 c 0 -2.4 1.5 -3.8 3.2 -3.8 c 1 0 1.8 0.7 2.3 1.6 c 0.5 -0.9 1.3 -1.6 2.3 -1.6 c 1.7 0 3.2 1.4 3.2 3.8 c 0 3 -4.5 6.5 -6.5 6.5 z" fill="#d43f63" />
    </svg>
  );
}

// Custom illustrations for the other 4 gifts
function GiftIllustration({ gift }) {
  if (gift.title === 'Warm Hugs') {
    return <VirtualHugArt />;
  }

  if (gift.title === 'My Safe Place') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
        <span className="sticker sticker--float" style={{ '--tilt': '-6deg' }}>
          <BearShape size={72} />
        </span>
        <span className="sticker sticker--float" style={{ '--tilt': '8deg' }}>
          <HeartShape size={36} fill="#f08cab" />
        </span>
      </div>
    );
  }

  if (gift.title === 'Quiet Magic') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', margin: '0.5rem 0' }}>
        <span className="sticker sticker--float" style={{ '--tilt': '-10deg' }}>
          <StarShape size={48} fill="#ffe7a3" />
        </span>
        <span className="sticker sticker--float" style={{ '--tilt': '12deg' }}>
          <SparkleShape size={52} fill="#f08cab" />
        </span>
        <span className="sticker sticker--float" style={{ '--tilt': '-4deg' }}>
          <StarShape size={36} fill="#bfe3f5" />
        </span>
      </div>
    );
  }

  if (gift.title === 'Forever Yours') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
        <span className="sticker sticker--float" style={{ '--tilt': '-8deg' }}>
          <ButterflyShape size={54} fill="#f9a8c0" />
        </span>
        <span className="sticker sticker--float" style={{ '--tilt': '6deg' }}>
          <FlowerShape size={52} />
        </span>
      </div>
    );
  }

  // Precious Heart
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', margin: '0.5rem 0' }}>
      <span className="sticker sticker--float" style={{ '--tilt': '-5deg' }}>
        <CakeShape size={80} />
      </span>
      <span className="sticker sticker--float" style={{ '--tilt': '10deg' }}>
        <HeartShape size={42} fill="#d43f63" />
      </span>
    </div>
  );
}

export default function GiftSection() {
  const [ref, inView] = useInView();
  const [openId, setOpenId] = useState(null);
  const [unwrappedIds, setUnwrappedIds] = useState(new Set());

  const activeGift = birthday.gifts.find((gift) => gift.id === openId);
  const totalGifts = birthday.gifts.length;
  const unwrappedCount = unwrappedIds.size;
  const allUnwrapped = unwrappedCount === totalGifts;

  function handleOpenGift(giftId) {
    setOpenId(giftId);
    setUnwrappedIds((prev) => new Set([...prev, giftId]));
  }

  return (
    <section ref={ref} id="gifts" className={`gifts ${inView ? 'is-visible' : ''}`}>
      {/* Floating background hearts, stars, and teddy bears */}
      <div className="gifts__decorations" aria-hidden="true">
        {ROOM_DECORATIONS.map((deco) => (
          <span
            key={deco.id}
            className="gift-deco"
            style={{
              left: deco.left,
              top: deco.top,
              animationDelay: deco.delay,
              animationDuration: deco.duration,
            }}
          >
            {deco.type === 'bear' && <BearShape size={deco.size} />}
            {deco.type === 'star' && <StarShape size={deco.size} />}
            {deco.type === 'heart' && <HeartShape size={deco.size} />}
          </span>
        ))}
      </div>

      <header className="gifts__header">
        <p className="eyebrow">Mystery Gift Room 🎁</p>
        <h2 className="section-title">Pick Your Little Surprise!</h2>
        <p className="gifts__intro">
          Five unique surprises created with love. Tap any gift box to unwrap.
        </p>

        <div className="gifts__progress">
          <span className="gifts__progress-pill">
            <CheckCircle2 size={18} />
            Unwrapped {unwrappedCount} of {totalGifts}
          </span>
          {allUnwrapped && (
            <span className="gifts__all-done">
              All 5 surprises unwrapped! You deserve all the love 💖
            </span>
          )}
        </div>
      </header>

      {/* Five Responsive Gift Box Cards */}
      <div className="gifts__grid">
        {birthday.gifts.map((gift, index) => {
          const isOpened = unwrappedIds.has(gift.id);
          return (
            <div
              key={gift.id}
              className="gift-card"
              style={{ '--float-delay': `${index * 0.4}s` }}
            >
              <span className="gift-card__badge">Gift #{gift.number}</span>

              {/* 3D-styled animated gift box with distinct ribbon and palette */}
              <GiftBox
                gift={gift}
                index={index}
                isOpen={isOpened}
                onOpen={() => handleOpenGift(gift.id)}
              />

              <h3 className="gift-card__title">{gift.title}</h3>
              <p className="gift-card__concept">{gift.concept}</p>

              <button
                type="button"
                className={`gift-card__status-btn ${isOpened ? 'is-unwrapped' : ''}`}
                onClick={() => handleOpenGift(gift.id)}
                aria-label={`Unwrap Gift #${gift.number}: ${gift.title}`}
              >
                {isOpened ? (
                  <>
                    <CheckCircle2 size={14} /> Unwrapped ✨
                  </>
                ) : (
                  <>
                    <GiftIcon size={14} /> Tap to unwrap 🎁
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* INDIVIDUAL GIFT REVEAL MODAL */}
      {activeGift && (
        <div
          className="gift-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gift-modal-title"
          onClick={() => setOpenId(null)}
        >
          {/* Floating heart particles around modal */}
          {MODAL_HEARTS.map((h) => (
            <span
              key={h.id}
              className="modal-heart-particle"
              style={{
                left: h.left,
                top: h.top,
                animationDelay: h.delay,
              }}
              aria-hidden="true"
            >
              <HeartShape size={h.size} fill="#ff9ebb" />
            </span>
          ))}

          <div
            className="gift-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button in top-right */}
            <button
              type="button"
              className="gift-modal-close"
              onClick={() => setOpenId(null)}
              aria-label="Close gift"
            >
              <X size={20} />
            </button>

            {/* Soft rainbow arc effect */}
            <RainbowArc />

            {/* Unique cute illustration per gift (including Virtual Hug for Warm Hugs) */}
            <div className="gift-modal-art-wrapper">
              <GiftIllustration gift={activeGift} />
            </div>

            <span className="gift-modal-tag">
              Surprise #{activeGift.number} • {activeGift.concept}
            </span>

            <h3 id="gift-modal-title" className="gift-modal-title">
              {activeGift.title}
            </h3>

            <div className="gift-modal-letter-paper">
              <p className="gift-modal-quote">
                “{activeGift.quote}”
              </p>
              <p className="gift-modal-message">
                {activeGift.message}
              </p>
              <p className="gift-modal-closing">
                — {activeGift.closing} 💌
              </p>
            </div>

            {/* ONLY A CLOSE BUTTON - NO AUTOMATIC ADVANCE */}
            <div className="gift-modal-actions">
              <button
                type="button"
                className="btn-pink"
                onClick={() => setOpenId(null)}
              >
                Close Gift 🌸
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
