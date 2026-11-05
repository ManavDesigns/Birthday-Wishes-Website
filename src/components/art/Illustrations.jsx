const HEART_PATH = 'M12 21s-8.5-5.2-8.5-11.1C3.5 6.6 5.6 4.5 8 4.5c1.6 0 3 .9 4 2.3 1-1.4 2.4-2.3 4-2.3 2.4 0 4.5 2.1 4.5 5.4C20.5 15.8 12 21 12 21z';
const STAR_PATH = 'M12 2.5l2.9 6.2 6.6.7-5 4.5 1.5 6.6L12 17.3 6 20.5l1.5-6.6-5-4.5 6.6-.7z';
const SPARKLE_PATH = 'M12 1c.7 5.2 2.8 7.3 8 8-5.2.7-7.3 2.8-8 8-.7-5.2-2.8-7.3-8-8 5.2-.7 7.3-2.8 8-8z';
const PETAL_ANGLES = [0, 72, 144, 216, 288];

function Art({ viewBox, size, className = '', children }) {
  const [, , width, height] = viewBox.split(' ').map(Number);
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size ? (size * height) / width : undefined}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function HeartShape({ size, fill = '#f08cab', className }) {
  return (
    <Art viewBox="0 0 24 24" size={size} className={className}>
      <path d={HEART_PATH} fill={fill} />
    </Art>
  );
}

export function StarShape({ size, fill = '#ffe7a3', className }) {
  return (
    <Art viewBox="0 0 24 24" size={size} className={className}>
      <path d={STAR_PATH} fill={fill} />
    </Art>
  );
}

export function SparkleShape({ size, fill = '#ffe7a3', className }) {
  return (
    <Art viewBox="0 0 24 24" size={size} className={className}>
      <path d={SPARKLE_PATH} fill={fill} />
    </Art>
  );
}

export function FlowerShape({ size, petal = '#f9a8c0', center = '#ffe7a3', className }) {
  return (
    <Art viewBox="0 0 40 40" size={size} className={className}>
      {PETAL_ANGLES.map((angle) => (
        <circle key={angle} cx="20" cy="10" r="7.5" fill={petal} transform={`rotate(${angle} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="4.5" fill={center} />
    </Art>
  );
}

export function BowShape({ size, fill = '#f08cab', className }) {
  return (
    <Art viewBox="0 0 40 24" size={size} className={className}>
      <path d="M20 12C12 0 0 2 2 12c0 10 12 12 18 0Z" fill={fill} />
      <path d="M20 12c8-12 20-10 18 0 0 10-12 12-18 0Z" fill={fill} />
      <circle cx="20" cy="12" r="3.2" fill="#d9557a" />
    </Art>
  );
}

export function CloudShape({ size, fill = '#ffffff', className }) {
  return (
    <Art viewBox="0 0 60 36" size={size} className={className}>
      <g fill={fill}>
        <circle cx="18" cy="23" r="11" />
        <circle cx="32" cy="16" r="14" />
        <circle cx="44" cy="23" r="10" />
        <rect x="8" y="23" width="46" height="13" rx="6.5" />
      </g>
    </Art>
  );
}

export function ButterflyShape({ size, fill = '#f9a8c0', accent = '#ffe7a3', className }) {
  return (
    <Art viewBox="0 0 44 36" size={size} className={className}>
      <g fill={fill}>
        <ellipse cx="12" cy="12" rx="10" ry="8.5" transform="rotate(-15 12 12)" />
        <ellipse cx="32" cy="12" rx="10" ry="8.5" transform="rotate(15 32 12)" />
      </g>
      <g fill={accent}>
        <ellipse cx="13" cy="25" rx="7" ry="6" />
        <ellipse cx="31" cy="25" rx="7" ry="6" />
      </g>
      <rect x="20.5" y="8" width="3" height="22" rx="1.5" fill="#6b3349" />
      <path d="M21 8Q18 2 14 2M23 8Q26 2 30 2" fill="none" stroke="#6b3349" strokeWidth="1.2" strokeLinecap="round" />
    </Art>
  );
}

export function KittenShape({ size, className }) {
  return (
    <Art viewBox="0 0 64 56" size={size} className={className}>
      <path d="M10 26L14 4l12 11Z M54 26L50 4 38 15Z" fill="#fff3f7" stroke="#f7b6c9" strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="32" cy="34" rx="22" ry="18" fill="#fff3f7" stroke="#f7b6c9" strokeWidth="2" />
      <circle cx="24" cy="32" r="2.6" fill="#6b3349" />
      <circle cx="40" cy="32" r="2.6" fill="#6b3349" />
      <circle cx="18" cy="41" r="3.5" fill="#f9a8c0" opacity="0.7" />
      <circle cx="46" cy="41" r="3.5" fill="#f9a8c0" opacity="0.7" />
      <path d="M29.5 38.5h5L32 41.5Z" fill="#f08cab" />
      <path d="M32 41.5q-3 3.5-6 1.5M32 41.5q3 3.5 6 1.5" fill="none" stroke="#6b3349" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 40 2 38M10 44 2 46M54 40l8-2M54 44l8 2" stroke="#6b3349" strokeWidth="1.2" strokeLinecap="round" />
    </Art>
  );
}

export function BearShape({ size, className }) {
  return (
    <Art viewBox="0 0 64 70" size={size} className={className}>
      <ellipse cx="32" cy="58" rx="17" ry="11" fill="#f2c29b" />
      <ellipse cx="32" cy="60" rx="9" ry="7" fill="#fde3cc" />
      <ellipse cx="14" cy="52" rx="6" ry="9" fill="#f2c29b" transform="rotate(20 14 52)" />
      <ellipse cx="50" cy="52" rx="6" ry="9" fill="#f2c29b" transform="rotate(-20 50 52)" />
      <circle cx="14" cy="16" r="9" fill="#f2c29b" />
      <circle cx="50" cy="16" r="9" fill="#f2c29b" />
      <circle cx="14" cy="16" r="4.5" fill="#f9a8c0" />
      <circle cx="50" cy="16" r="4.5" fill="#f9a8c0" />
      <circle cx="32" cy="32" r="22" fill="#f2c29b" />
      <ellipse cx="32" cy="40" rx="11" ry="8" fill="#fde3cc" />
      <ellipse cx="32" cy="36" rx="3.5" ry="2.5" fill="#6b3349" />
      <circle cx="23" cy="29" r="2.6" fill="#6b3349" />
      <circle cx="41" cy="29" r="2.6" fill="#6b3349" />
      <circle cx="17" cy="38" r="3.5" fill="#f9a8c0" opacity="0.7" />
      <circle cx="47" cy="38" r="3.5" fill="#f9a8c0" opacity="0.7" />
      <path d="M28 43Q32 47 36 43" fill="none" stroke="#6b3349" strokeWidth="1.8" strokeLinecap="round" />
    </Art>
  );
}

export function CakeShape({ size, className }) {
  return (
    <Art viewBox="0 0 120 120" size={size} className={className}>
      <ellipse cx="60" cy="110" rx="50" ry="6" fill="#f7b6c9" />
      <rect x="16" y="76" width="88" height="32" rx="10" fill="#ffffff" stroke="#f7b6c9" strokeWidth="2" />
      <path d="M16 86q7 9 14 0q7 9 14 0q7 9 14 0q7 9 14 0q7 9 14 0q7 9 14 0V76H16Z" fill="#ffd6e3" />
      <rect x="30" y="50" width="60" height="28" rx="9" fill="#ffe1ec" stroke="#f7b6c9" strokeWidth="2" />
      <path d="M30 58q5 8 10 0q5 8 10 0q5 8 10 0q5 8 10 0q5 8 10 0q5 8 10 0V50H30Z" fill="#ffffff" />
      <rect x="42" y="30" width="5" height="16" rx="2" fill="#b9e6cc" />
      <rect x="57.5" y="30" width="5" height="16" rx="2" fill="#ffe7a3" />
      <rect x="73" y="30" width="5" height="16" rx="2" fill="#bfe3f5" />
      <ellipse cx="44.5" cy="26" rx="3" ry="5" fill="#ffb13b" />
      <ellipse cx="60" cy="26" rx="3" ry="5" fill="#ffb13b" />
      <ellipse cx="75.5" cy="26" rx="3" ry="5" fill="#ffb13b" />
      <rect x="38" y="60" width="5" height="2" rx="1" fill="#bfe3f5" transform="rotate(20 40 61)" />
      <rect x="70" y="63" width="5" height="2" rx="1" fill="#e0526f" transform="rotate(-20 72 64)" />
      <rect x="54" y="66" width="5" height="2" rx="1" fill="#b9e6cc" transform="rotate(10 56 67)" />
    </Art>
  );
}

export function BalloonShape({ size, fill = '#f9a8c0', className }) {
  return (
    <Art viewBox="0 0 40 66" size={size} className={className}>
      <ellipse cx="20" cy="24" rx="16" ry="21" fill={fill} />
      <ellipse cx="13" cy="16" rx="3.5" ry="6" fill="#ffffff" opacity="0.55" transform="rotate(20 13 16)" />
      <path d="M17 44 20 48 23 44Z" fill={fill} />
      <path d="M20 48Q12 56 20 66" fill="none" stroke="#b98aa0" strokeWidth="1.2" />
    </Art>
  );
}

export function EnvelopeShape({ size, open = false, className = '' }) {
  return (
    <Art viewBox="0 0 240 160" size={size} className={`envelope ${open ? 'is-open' : ''} ${className}`}>
      <rect x="6" y="20" width="228" height="134" rx="18" fill="#ffd6e3" stroke="#f7b6c9" strokeWidth="3" />
      <path d="M12 36 120 104 228 36" fill="none" stroke="#f7b6c9" strokeWidth="3" strokeLinejoin="round" />
      <g className="envelope__flap">
        <path d="M6 30Q6 20 16 20H224Q234 20 234 30L120 98Z" fill="#fbc4d5" stroke="#f7b6c9" strokeWidth="3" strokeLinejoin="round" />
      </g>
      <path transform="translate(94 52) scale(2.2)" d={HEART_PATH} fill="#d9557a" />
    </Art>
  );
}

export const ACCENT_SHAPES = {
  bear: BearShape,
  bow: BowShape,
  butterfly: ButterflyShape,
  cloud: CloudShape,
  flower: FlowerShape,
  heart: HeartShape,
  kitten: KittenShape,
  sparkle: SparkleShape,
  star: StarShape,
};
