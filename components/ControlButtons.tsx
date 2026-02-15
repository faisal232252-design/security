
import React from 'react';
import { SystemMode } from '../types';

interface ControlButtonsProps {
  currentMode: SystemMode;
  onSelect: (mode: SystemMode) => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ currentMode, onSelect }) => {
  const buttons = [
    { id: SystemMode.LOG, label: 'Log' },
    { id: SystemMode.SETTINGS, label: 'Settings' },
    { id: SystemMode.SOS, label: 'SOS', isSpecial: true },
    { id: SystemMode.ARM, label: 'Arm' },
    { id: SystemMode.DISARM, label: 'Disarm' },
    { id: SystemMode.HOME_ARM, label: 'Home Arm' },
  ];

  const renderIcon = (id: SystemMode, isActive: boolean) => {
    const color = isActive ? 'currentColor' : 'rgba(255,255,255,0.4)';
    const strokeWidth = 1.5;

    switch (id) {
      case SystemMode.LOG:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
        );
      case SystemMode.SETTINGS:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
          </svg>
        );
      case SystemMode.ARM:
        return isActive ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-rose-500">
             <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        );
      case SystemMode.DISARM:
        return isActive ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
             <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
          </svg>
        );
      case SystemMode.HOME_ARM:
        return isActive ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        );
      case SystemMode.SOS:
        // High-end custom SOS icon designed to match the style
        return (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={isActive ? "white" : "#ef4444"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" stroke={isActive ? "white" : "#ef4444"} strokeWidth="2" strokeDasharray="2 2" />
            <path d="M12 8v4M12 16h.01" stroke={isActive ? "white" : "#ef4444"} strokeWidth="3" />
          </svg>
        );
    }
  };

  const getButtonStyles = (id: SystemMode, isSpecial?: boolean) => {
    const isActive = currentMode === id;
    
    if (id === SystemMode.SOS) {
      return isActive 
        ? "bg-rose-600 border-rose-400 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.3)]"
        : "bg-rose-950/20 border-rose-500/30 text-rose-500 hover:bg-rose-500/10";
    }

    if (isActive) {
      switch(id) {
        case SystemMode.DISARM: return "bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.15)]";
        case SystemMode.ARM: return "bg-rose-500/20 border-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.15)]";
        case SystemMode.HOME_ARM: return "bg-amber-500/20 border-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.15)]";
        default: return "bg-white/10 border-white/40 text-white";
      }
    }

    return "bg-white/[0.03] border-white/5 text-white/40 hover:bg-white/[0.08] hover:border-white/10";
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onSelect(btn.id)}
          className={`flex flex-col items-center justify-center gap-3 rounded-3xl border transition-all duration-300 active:scale-95 ${getButtonStyles(btn.id, btn.isSpecial)}`}
        >
          {renderIcon(btn.id, currentMode === btn.id)}
          <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${currentMode === btn.id ? 'text-white' : 'text-white/40'}`}>
            {btn.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ControlButtons;
