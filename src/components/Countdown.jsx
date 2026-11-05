import { useCountdown } from '@/hooks/useCountdown';
import './Countdown.css';

const UNITS = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds'],
];

export default function Countdown({ month, day }) {
  const time = useCountdown(month, day);

  if (time.isToday) {
    return <p className="countdown__today">Today is the day</p>;
  }

  return (
    <ul className="countdown" aria-label="Time until birthday">
      {UNITS.map(([key, label]) => (
        <li key={key} className="countdown__unit">
          <span className="countdown__value">{String(time[key]).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}
