import React from 'react';
import { Minus, Square, X } from 'lucide-react';

const WindowControls = ({ onMinimize, onMaximize, onClose }) => {
  return (
    <div className="window-controls">
      <button 
        className="window-control minimize"
        onClick={onMinimize}
        aria-label="Minimize window"
      >
        <Minus size={12} strokeWidth={2} />
      </button>
      <button 
        className="window-control maximize"
        onClick={onMaximize}
        aria-label="Maximize window"
      >
        <Square size={10} strokeWidth={2} fill="none" />
      </button>
      <button 
        className="window-control close"
        onClick={onClose}
        aria-label="Close window"
      >
        <X size={12} strokeWidth={2} />
      </button>
    </div>
  );
};

export default WindowControls; 