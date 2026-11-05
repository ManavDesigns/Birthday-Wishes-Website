import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ photos, index, onIndexChange, onClose }) {
  const photo = photos[index];
  const total = photos.length;
  const [hasError, setHasError] = useState(false);

  const showPrevious = () => {
    setHasError(false);
    onIndexChange((index - 1 + total) % total);
  };

  const showNext = () => {
    setHasError(false);
    onIndexChange((index + 1) % total);
  };

  useEffect(() => {
    setHasError(false);
  }, [index]);

  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrevious();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index, total, onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <div className="lightbox__panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close photo">
          <X size={20} />
        </button>

        {!hasError ? (
          <img
            className="lightbox__image"
            src={photo.src}
            alt={photo.alt}
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            style={{
              width: '100%',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              background: '#fff0f5',
              borderRadius: '12px',
              color: 'var(--soft-red)',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <Camera size={44} />
            <p style={{ fontWeight: 600, fontSize: '1rem', margin: 0 }}>
              Photo Placeholder #{index + 1}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#8a4f68', margin: 0 }}>
              Add your own photo in <code>src/config/birthday.js</code>
            </p>
          </div>
        )}

        <div className="lightbox__footer">
          <button type="button" className="lightbox__nav" onClick={showPrevious} aria-label="Previous photo">
            <ChevronLeft size={22} />
          </button>
          <p className="lightbox__caption">{photo.caption}</p>
          <button type="button" className="lightbox__nav" onClick={showNext} aria-label="Next photo">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
