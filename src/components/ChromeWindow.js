import React from 'react';
import WindowControls from './WindowControls';
import ChromeTopBar from './ChromeTopBar';
import ContentArea from './ContentArea';

const ChromeWindow = ({ 
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
  onMenuClick,
  onMinimize,
  onMaximize,
  onClose,
  children
}) => {
  return (
    <div className="chrome-window">
      <WindowControls 
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        onClose={onClose}
      />

      <ChromeTopBar 
        tabs={tabs}
        activeTab={activeTab}
        addressValue={addressValue}
        onTabClick={onTabClick}
        onTabClose={onTabClose}
        onNewTab={onNewTab}
        onBack={onBack}
        onForward={onForward}
        onRefresh={onRefresh}
        onAddressChange={onAddressChange}
        onStarClick={onStarClick}
        onMenuClick={onMenuClick}
      />

      <ContentArea>
        {children}
      </ContentArea>
    </div>
  );
};

export default ChromeWindow; 