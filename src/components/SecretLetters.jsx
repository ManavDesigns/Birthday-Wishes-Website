import { useState } from 'react';
import { X } from 'lucide-react';
import { ACCENT_SHAPES, EnvelopeShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import { useInView } from '@/hooks/useInView';
import './SecretLetters.css';

export default function SecretLetters() {
  const [ref, inView] = useInView();
  const [activeLetter, setActiveLetter] = useState(null);

  return (
    <section ref={ref} id="letters" className={`letters ${inView ? 'is-visible' : ''}`}>
      <header className="letters__header">
        <p className="eyebrow">Secret Envelopes 💌</p>
        <h2 className="section-title">Five Letters For You</h2>
        <p className="letters__intro">
          Each envelope holds a special message for you. Tap any envelope to read.
        </p>
      </header>

      {/* Grid of fixed-dimension letter cards that NEVER resize or shift */}
      <div className="letters__grid">
        {birthday.letters.map((letter, index) => {
          const Accent = ACCENT_SHAPES[letter.accent];
          return (
            <article
              key={letter.id}
              className="letter-card"
              style={{ '--tilt': index % 2 === 0 ? '1.5deg' : '-1.5deg' }}
            >
              {Accent && (
                <span
                  className="sticker sticker--float letter-card__sticker"
                  aria-hidden="true"
                >
                  <Accent size={28} />
                </span>
              )}

              <button
                type="button"
                className="letter-card__button"
                onClick={() => setActiveLetter(letter)}
                aria-label={`Open Letter #${letter.number}: ${letter.title}`}
              >
                <div className="letter-card__envelope-wrap">
                  <EnvelopeShape open={false} className="letter-card__svg" />
                </div>
                <h3 className="letter-card__title">Letter #{letter.number}</h3>
                <p className="letter-card__tag">{letter.title}</p>
                <span className="letter-card__action-pill">Tap to open 💌</span>
              </button>
            </article>
          );
        })}
      </div>

      {/* SEPARATE MODAL OVERLAY: Opens letter without resizing the card grid */}
      {activeLetter && (
        <div
          className="letter-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="letter-modal-title"
          onClick={() => setActiveLetter(null)}
        >
          <div
            className="letter-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="letter-modal-close"
              onClick={() => setActiveLetter(null)}
              aria-label="Close letter"
            >
              <X size={20} />
            </button>

            <div className="letter-modal-envelope-wrapper">
              <EnvelopeShape open={true} className="letter-modal-envelope" />
              {activeLetter.accent && ACCENT_SHAPES[activeLetter.accent] && (
                <span className="sticker sticker--float letter-modal-accent" style={{ '--tilt': '8deg' }}>
                  {(() => {
                    const Accent = ACCENT_SHAPES[activeLetter.accent];
                    return <Accent size={34} />;
                  })()}
                </span>
              )}
            </div>

            <span className="letter-modal-tag">Letter #{activeLetter.number} of 5</span>
            <h3 id="letter-modal-title" className="letter-modal-title">
              {activeLetter.title}
            </h3>

            <div className="letter-modal-paper">
              <p className="letter-modal-quote">
                “{activeLetter.quote}”
              </p>
              <p className="letter-modal-message">
                {activeLetter.message}
              </p>
              <p className="letter-modal-closing">
                — {activeLetter.closing} 💌
              </p>
            </div>

            <div className="letter-modal-actions">
              <button
                type="button"
                className="btn-pink"
                onClick={() => setActiveLetter(null)}
              >
                Close Letter 🌸
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
