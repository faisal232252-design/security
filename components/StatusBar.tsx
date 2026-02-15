
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="flex items-center gap-4 text-white/70">
      {/* LTE Signal */}
      <div className="flex items-end gap-[2px] h-3">
        <div className="w-1 h-1 bg-white rounded-[1px]" />
        <div className="w-1 h-1.5 bg-white rounded-[1px]" />
        <div className="w-1 h-2 bg-white rounded-[1px]" />
        <div className="w-1 h-2.5 bg-white rounded-[1px]" />
        <div className="w-1 h-3 bg-white/30 rounded-[1px]" />
      </div>

      {/* Wifi Icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>

      {/* Charging Indicator */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="opacity-80">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>

      {/* Battery */}
      <div className="relative w-8 h-4 border border-white/40 rounded-[3px] p-[1px] flex items-center">
        <div className="bg-emerald-400 h-full w-[85%] rounded-[1px]" />
        <div className="absolute -right-[3px] top-1 bottom-1 w-[2px] bg-white/40 rounded-r-full" />
      </div>
    </div>
  );
};

export default StatusBar;
