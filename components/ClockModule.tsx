
import React, { useState, useEffect } from 'react';

const ClockModule: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return { hours, minutes };
  };

  const { hours, minutes } = formatTime(time);
  const dayName = time.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const monthName = time.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const dateNum = time.getDate();
  const yearNum = time.getFullYear();

  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="text-[110px] font-extralight tracking-tight leading-none text-white drop-shadow-sm">
          {hours}:{minutes}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-4 ml-2">
        <span className="text-xl font-bold tracking-[0.2em] text-white/90">
          {dayName}
        </span>
        <div className="h-4 w-[2px] bg-white/20 mx-1" />
        <span className="text-xl font-light tracking-widest text-white/70">
          {monthName} {dateNum}, {yearNum}
        </span>
      </div>
    </div>
  );
};

export default ClockModule;
