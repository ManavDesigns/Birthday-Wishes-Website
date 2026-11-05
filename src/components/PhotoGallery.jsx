import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import Polaroid from '@/components/Polaroid';
import { FlowerShape, KittenShape, StarShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import { useInView } from '@/hooks/useInView';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const [ref, inView] = useInView();
  const [activeIndex, setActiveIndex] = useState(null);
  const { photos } = birthday;

  return (
    <section id="gallery" ref={ref} className={`gallery ${inView ? 'is-visible' : ''}`}>
      <header className="gallery__header">
        <p className="eyebrow">The Reel</p>
        <div className="gallery__heading">
          <span className="sticker sticker--float" style={{ '--tilt': '-10deg' }}>
            <FlowerShape size={40} />
          </span>
          <h2 className="section-title">Scenes from Your Life</h2>
          <span className="sticker sticker--float" style={{ '--tilt': '10deg' }}>
            <StarShape size={34} fill="#ffe08a" />
          </span>
        </div>
        <p className="gallery__intro">Tap any photograph to see it up close.</p>
      </header>

      <div className="gallery__grid">
        {photos.map((photo, index) => (
          <Polaroid
            key={photo.src}
            photo={photo}
            index={index}
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <KittenShape className="gallery__kitten" />

      {activeIndex !== null && (
        <Lightbox
          photos={photos}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
