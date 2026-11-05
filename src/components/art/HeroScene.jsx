import { ButterflyShape, FlowerShape, SparkleShape } from '@/components/art/Illustrations';
import './HeroScene.css';

const RAINBOW = ['#ffc6d9', '#ffe7a3', '#c4ecd6', '#bfe3f5'];

const CLOUDS = [
  { x: 90, y: 150, scale: 1.1, delay: '0s' },
  { x: 520, y: 110, scale: 0.8, delay: '-6s' },
  { x: 760, y: 300, scale: 1, delay: '-12s' },
];

const FLOWERS = [
  { x: 110, y: 700, size: 60 },
  { x: 260, y: 738, size: 44 },
  { x: 640, y: 764, size: 38 },
  { x: 900, y: 720, size: 56 },
  { x: 1080, y: 690, size: 48 },
];

function SceneCloud({ x, y, scale, delay }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className="scene-cloud" style={{ animationDelay: delay }}>
        <g fill="#ffffff" opacity="0.95">
          <circle cx="18" cy="23" r="11" />
          <circle cx="32" cy="16" r="14" />
          <circle cx="44" cy="23" r="10" />
          <rect x="8" y="23" width="46" height="13" rx="6.5" />
        </g>
      </g>
    </g>
  );
}

export default function HeroScene({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="scene-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffc9dc" />
          <stop offset="0.55" stopColor="#ffe9f2" />
          <stop offset="1" stopColor="#fff8f0" />
        </linearGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#scene-sky)" />
      <circle cx="930" cy="190" r="170" fill="#fff4cc" opacity="0.6" />
      <circle cx="930" cy="190" r="96" fill="#ffe7a3" />

      <g fill="none" strokeWidth="16" strokeLinecap="round" opacity="0.85">
        {RAINBOW.map((color, index) => {
          const radius = 420 - index * 24;
          return (
            <path
              key={color}
              d={`M${380 - radius} 640A${radius} ${radius} 0 0 1 ${380 + radius} 640`}
              stroke={color}
            />
          );
        })}
      </g>

      {CLOUDS.map((cloud) => (
        <SceneCloud key={cloud.x} {...cloud} />
      ))}

      <path d="M0 520Q300 420 600 520T1200 500V800H0Z" fill="#ffc2d8" />
      <path d="M0 600Q400 500 800 600T1200 590V800H0Z" fill="#f7a9c4" />
      <path d="M0 700Q600 620 1200 700V800H0Z" fill="#ec8db0" />

      {FLOWERS.map(({ x, y, size }) => (
        <g key={`${x}-${y}`} transform={`translate(${x - size / 2} ${y - size / 2})`}>
          <FlowerShape size={size} petal="#ffffff" center="#ffe7a3" />
        </g>
      ))}

      <g transform="translate(200 360)">
        <g className="scene-flutter">
          <ButterflyShape size={64} />
        </g>
      </g>
      <g transform="translate(790 330)">
        <g className="scene-flutter scene-flutter--late">
          <ButterflyShape size={48} fill="#ffb8d0" />
        </g>
      </g>

      <g transform="translate(300 200)">
        <g className="scene-twinkle">
          <SparkleShape size={30} fill="#ffffff" />
        </g>
      </g>
      <g transform="translate(640 250)">
        <g className="scene-twinkle scene-twinkle--late">
          <SparkleShape size={22} fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
}
