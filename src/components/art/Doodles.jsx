import {
  ButterflyShape,
  BearShape,
  BowShape,
  CloudShape,
  FlowerShape,
  HeartShape,
  KittenShape,
  SparkleShape,
  StarShape,
} from '@/components/art/Illustrations';
import './Doodles.css';

const SHAPES = {
  heart: HeartShape,
  star: StarShape,
  sparkle: SparkleShape,
  flower: FlowerShape,
  bow: BowShape,
  cloud: CloudShape,
  butterfly: ButterflyShape,
  kitten: KittenShape,
  bear: BearShape,
};

const TYPES = Object.keys(SHAPES);
const LARGE_TYPES = new Set(['cloud', 'kitten', 'bear']);
const DOODLE_COUNT = 28;

const DOODLES = Array.from({ length: DOODLE_COUNT }, (_, index) => {
  const type = TYPES[index % TYPES.length];
  return {
    id: index,
    type,
    top: `${(index * 41) % 94}%`,
    left: `${(index * 57 + 7) % 94}%`,
    size: LARGE_TYPES.has(type) ? 40 + (index % 3) * 10 : 14 + (index % 4) * 6,
    duration: `${6 + (index % 5) * 1.4}s`,
    delay: `${(index * 0.53) % 5}s`,
  };
});

export default function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      {DOODLES.map(({ id, type, top, left, size, duration, delay }) => {
        const Shape = SHAPES[type];
        return (
          <span
            key={id}
            className={`doodle ${type === 'sparkle' ? 'doodle--twinkle' : ''}`}
            style={{ top, left, animationDuration: duration, animationDelay: delay }}
          >
            <Shape size={size} />
          </span>
        );
      })}
    </div>
  );
}
