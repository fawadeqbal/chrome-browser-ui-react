import React from 'react';
import TabSection from './TabSection';
import AddressBarSection from './AddressBarSection';

const ChromeTopBar = ({ 
  tabs,
  activeTab,
  addressValue,
  onTabClick,
  onTabClose,
  onNewTab,
  onBack,
  onForward,
  onRefresh,
  onAddressChange,
  onStarClick,
  onMenuClick
}) => {
  return (
    <div className="chrome-top-bar">
      <TabSection 
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={onTabClick}
        onTabClose={onTabClose}
        onNewTab={onNewTab}
      />
      
      <AddressBarSection 
        addressValue={addressValue}
        onBack={onBack}
        onForward={onForward}
        onRefresh={onRefresh}
        onAddressChange={onAddressChange}
        onStarClick={onStarClick}
        onMenuClick={onMenuClick}
      />
    </div>
  );
};

export default ChromeTopBar; 