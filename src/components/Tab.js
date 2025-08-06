import React from 'react';
import { X, FileText, Globe } from 'lucide-react';

const Tab = ({ 
  tab, 
  isActive, 
  onClick, 
  onClose 
}) => {
  const getTabIcon = (iconType) => {
    switch (iconType) {
      case 'file':
        return <FileText size={14} color="#666666" />;
      case 'react':
        return <div style={{ width: 14, height: 14, background: '#61dafb', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '9px', color: '#000', fontWeight: 'bold' }}>R</span>
        </div>;
      case 'chrome':
        return <Globe size={14} color="#666666" />;
      default:
        return <Globe size={14} color="#666666" />;
    }
  };

  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => onClick(tab.id)}
      role="tab"
      aria-selected={isActive}
      aria-label={`Tab ${tab.id + 1}: ${tab.title}`}
    >
      <div className="tab-content">
        <div className="tab-icon">
          {getTabIcon(tab.icon)}
        </div>
        <span className="tab-title">{tab.title}</span>
        <button 
          className="tab-close"
          onClick={(e) => onClose(e, tab.id)}
          aria-label={`Close tab: ${tab.title}`}
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
};

export default Tab; 