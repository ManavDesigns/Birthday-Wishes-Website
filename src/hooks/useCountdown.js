import { useEffect, useState } from 'react';

const DAY_MS = 24 * 60 * 60 * 1000;

function getTarget(month, day, now) {
  const start = new Date(now.getFullYear(), month - 1, day);
  if (now < start) return start;
  const end = new Date(now.getFullYear(), month - 1, day + 1);
  if (now < end) return null;
  return new Date(now.getFullYear() + 1, month - 1, day);
}

function getRemaining(month, day) {
  const now = new Date();
  const target = getTarget(month, day, now);
  if (!target) {
    return { isToday: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const total = Math.floor((target - now) / 1000);
  return {
    isToday: false,
    days: Math.floor(total / (DAY_MS / 1000)),
    hours: Math.floor((total % (DAY_MS / 1000)) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function useCountdown(month, day) {
  const [remaining, setRemaining] = useState(() => getRemaining(month, day));

  useEffect(() => {
    const id = window.setInterval(() => setRemaining(getRemaining(month, day)), 1000);
    return () => window.clearInterval(id);
  }, [month, day]);

  return remaining;
}
