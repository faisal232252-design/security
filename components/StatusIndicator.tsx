
import React from 'react';
import { SystemMode } from '../types';

interface StatusIndicatorProps {
  mode: SystemMode;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ mode }) => {
  const getModeColor = () => {
    switch (mode) {
      case SystemMode.DISARM: return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case SystemMode.ARM: return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      case SystemMode.HOME_ARM: return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case SystemMode.SOS: return 'text-white bg-rose-600 border-rose-400/50 shadow-[0_0_30px_rgba(225,29,72,0.4)]';
      default: return 'text-white/60 bg-white/5 border-white/10';
    }
  };

  const getStatusMessage = () => {
    switch (mode) {
      case SystemMode.DISARM: return 'Ready to Arm';
      case SystemMode.ARM: return 'System Armed';
      case SystemMode.HOME_ARM: return 'Armed Stay';
      case SystemMode.SOS: return 'Emergency Signal Active';
      default: return mode;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center py-8 rounded-[40px] border transition-all duration-500 ${getModeColor()}`}>
      <div className="flex items-center gap-3">
        {mode !== SystemMode.SOS && (
            <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${mode === SystemMode.DISARM ? 'bg-emerald-400' : mode === SystemMode.ARM ? 'bg-rose-500' : 'bg-amber-500'}`} />
        )}
        <span className={`text-4xl font-bold tracking-tight ${mode === SystemMode.SOS ? 'animate-bounce' : ''}`}>
          {getStatusMessage().toUpperCase()}
        </span>
      </div>
      <div className="mt-1 text-sm font-medium opacity-60 uppercase tracking-[0.3em]">
        System Status
      </div>
    </div>
  );
};

export default StatusIndicator;
