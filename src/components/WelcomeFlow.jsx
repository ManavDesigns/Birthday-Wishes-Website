import { useState } from 'react';
import { KittenShape, HeartShape, SparkleShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import './WelcomeFlow.css';

export default function WelcomeFlow({ onYes }) {
  const [noCount, setNoCount] = useState(0);

  const isInitial = noCount === 0;
  const currentPleading = !isInitial
    ? birthday.noPleadings[(noCount - 1) % birthday.noPleadings.length]
    : null;

  function handleNo() {
    setNoCount((prev) => prev + 1);
  }

  return (
    <div className="welcome-screen" role="region" aria-label="Birthday Welcome Flow">
      <div className="welcome-card">
        <div className="welcome-badge">
          <span>✨ A Special Surprise For Madam Ji ✨</span>
        </div>

        <div className="welcome-cat-wrapper">
          <span className="sticker sticker--float welcome-sticker welcome-sticker--left" style={{ '--tilt': '-12deg' }}>
            <SparkleShape size={24} fill="#f08cab" />
          </span>
          <KittenShape size={88} className="welcome-cat" />
          <span className="sticker sticker--float welcome-sticker welcome-sticker--right" style={{ '--tilt': '14deg' }}>
            <HeartShape size={24} />
          </span>
        </div>

        <div className="welcome-text-container">
          <h1 className="welcome-title">
            {isInitial ? birthday.welcomeGreeting : currentPleading.text}
          </h1>

          <p className="welcome-question">
            {isInitial ? birthday.welcomeQuestion : currentPleading.subtext}
          </p>

          <p className="welcome-subtext">
            {isInitial
              ? 'Someone made this cute little world just for you 🌸'
              : `Madam Ji please maan jao na! 🥺`}
          </p>
        </div>

        <div className="welcome-actions">
          <button
            type="button"
            className="btn-yes"
            onClick={onYes}
          >
            YES 💗
          </button>

          <button
            type="button"
            className="btn-no"
            onClick={handleNo}
          >
            NO 🙈
          </button>
        </div>

        <p className="welcome-footer-hint">
          {noCount > 0 ? '(Click YES anytime to open your gifts! 🎁)' : 'Press YES to unwrap the magic ✨'}
        </p>
      </div>
    </div>
  );
}
