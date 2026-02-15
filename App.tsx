
import React, { useState, useEffect } from 'react';
import { SystemMode } from './types';
import StatusBar from './components/StatusBar';
import ClockModule from './components/ClockModule';
import WeatherModule from './components/WeatherModule';
import ControlButtons from './components/ControlButtons';
import StatusIndicator from './components/StatusIndicator';

const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<SystemMode>(SystemMode.DISARM);
  const [lastMode, setLastMode] = useState<SystemMode>(SystemMode.DISARM);

  const handleModeChange = (mode: SystemMode) => {
    if (mode === SystemMode.SOS) {
      // Logic for SOS might be different (e.g. toggle or momentary)
      // For this UI, we treat it as an active state
      setCurrentMode(SystemMode.SOS);
    } else {
      setCurrentMode(mode);
    }
  };

  return (
    <div className="relative w-[1024px] h-[600px] bg-[#0A0C10] text-white overflow-hidden shadow-2xl rounded-lg border border-white/5 ring-8 ring-black ring-inset">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      {/* Top Bar Section */}
      <div className="absolute top-0 left-0 right-0 h-16 z-20 flex items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-xs font-bold tracking-widest text-white/40 uppercase">Secure</div>
            <div className="h-1 w-1 bg-white/20 rounded-full" />
            <div className="text-[14px] font-medium text-white/60 tabular-nums">
              {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="ml-4 h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1 opacity-60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                <span className="text-[10px] font-bold tracking-tighter">SECURED</span>
            </div>
          </div>
        </div>
        
        <StatusBar />
      </div>

      {/* Main Content Area */}
      <div className="flex h-full pt-16 pb-8 px-10 gap-10">
        
        {/* Left Side: Info Modules */}
        <div className="flex-[0.45] flex flex-col justify-between py-4">
          <ClockModule />
          <WeatherModule />
        </div>

        {/* Right Side: Status & Controls */}
        <div className="flex-[0.55] flex flex-col gap-6 py-4">
          <StatusIndicator mode={currentMode} />
          <ControlButtons currentMode={currentMode} onSelect={handleModeChange} />
        </div>

      </div>

      {/* Safe Area Margins Visual Cue (Developer Mode) */}
      <div className="absolute inset-0 border border-transparent pointer-events-none" />
    </div>
  );
};

export default App;
