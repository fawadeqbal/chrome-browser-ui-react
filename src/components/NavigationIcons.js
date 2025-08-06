import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const NavigationIcons = ({ onBack, onForward, onRefresh }) => {
  return (
    <div className="navigation-icons">
      <button 
        className="nav-icon back"
        onClick={onBack}
        aria-label="Go back"
      >
        <ChevronLeft size={18} />
      </button>
      <button 
        className="nav-icon forward"
        onClick={onForward}
        aria-label="Go forward"
      >
        <ChevronRight size={18} />
      </button>
      <button 
        className="nav-icon refresh"
        onClick={onRefresh}
        aria-label="Refresh page"
      >
        <RotateCcw size={16} />
      </button>
    </div>
  );
};

export default NavigationIcons; 