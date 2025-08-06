import React from 'react';
import Tab from './Tab';
import NewTabButton from './NewTabButton';

const TabSection = ({ 
  tabs, 
  activeTab, 
  onTabClick, 
  onTabClose, 
  onNewTab 
}) => {
  return (
    <div className="tab-section" role="tablist">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          onClick={onTabClick}
          onClose={onTabClose}
        />
      ))}
      <NewTabButton onClick={onNewTab} />
    </div>
  );
};

export default TabSection; 