import { ArrowDown } from 'lucide-react';
import HeroScene from '@/components/art/HeroScene';
import { BearShape, KittenShape } from '@/components/art/Illustrations';
import { birthday } from '@/config/birthday';
import './BirthdayHero.css';

const GREETING = 'Happy Birthday';

function AnimatedLetters({ text, offset = 0 }) {
  return Array.from(text).map((char, index) => (
    <span
      key={index}
      className="hero__letter"
      style={{ '--i': offset + index }}
      aria-hidden="true"
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
}

export default function BirthdayHero() {
  return (
    <section className="hero">
      <HeroScene className="hero__scene" />

      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">A Special Celebration For You 🌸</p>
        <h1 className="hero__title" aria-label={`${GREETING} ${birthday.name}`}>
          <span className="hero__line">
            <AnimatedLetters text={GREETING} />
          </span>
          <span className="hero__line hero__line--name">
            <AnimatedLetters text={birthday.name} offset={GREETING.length} />
          </span>
        </h1>
        <p className="hero__subtitle">{birthday.heroSubtitle}</p>
      </div>

      <div className="hero__deco hero__deco--bear" aria-hidden="true">
        <BearShape />
      </div>
      <div className="hero__deco hero__deco--kitten" aria-hidden="true">
        <KittenShape />
      </div>

      <a href="#gifts" className="hero__scroll" aria-label="Scroll to the mystery gift room">
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
