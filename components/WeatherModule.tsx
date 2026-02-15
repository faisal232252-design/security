
import React from 'react';

const WeatherModule: React.FC = () => {
  return (
    <div className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/5 rounded-3xl backdrop-blur-sm self-start">
      <div className="flex flex-col items-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <span className="text-[10px] font-bold text-white/30 tracking-widest mt-2 uppercase">Sunny</span>
      </div>
      
      <div className="h-10 w-px bg-white/10" />

      <div className="flex flex-col">
        <div className="flex items-start">
          <span className="text-5xl font-light text-white">24</span>
          <span className="text-xl font-light text-white/60 mt-1">°C</span>
        </div>
        <div className="flex gap-3 mt-1">
          <div className="flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-400"><path d="m18 15-6-6-6 6"/></svg>
            <span className="text-xs font-medium text-white/40">28°</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-400"><path d="m6 9 6 6 6-6"/></svg>
            <span className="text-xs font-medium text-white/40">18°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModule;
