import { useState } from 'react';
import { Camera, Heart } from 'lucide-react';

const TILTS = [-4, 3, -2, 5, -3, 2];
const DROPS = ['0px', '2.5rem', '0px'];

export default function Polaroid({ photo, index, onOpen }) {
  const [hasError, setHasError] = useState(false);

  const style = {
    '--tilt': `${TILTS[index % TILTS.length]}deg`,
    '--drop': DROPS[index % DROPS.length],
    '--delay': `${index * 120}ms`,
  };

  return (
    <button
      type="button"
      className="polaroid"
      style={style}
      onClick={onOpen}
      aria-label={`Enlarge photo: ${photo.caption}`}
    >
      <span className="polaroid__frame">
        {!hasError ? (
          <img
            className="polaroid__image"
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onError={() => setHasError(true)}
            style={{ objectFit: 'cover', objectPosition: photo.objectPosition || 'center 20%' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #ffd6e3 0%, #fff0f5 100%)',
              color: 'var(--soft-red)',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <Camera size={36} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              Photo #{index + 1}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#8a4f68' }}>
              (Add your photo in birthday.js)
            </span>
          </div>
        )}
      </span>
      <span className="polaroid__caption">{photo.caption}</span>
    </button>
  );
}
