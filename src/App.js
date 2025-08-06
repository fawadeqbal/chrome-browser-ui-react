import React, { useState, useEffect } from 'react';
import './App.css';
import ChromeWindow from './components/ChromeWindow';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [addressValue, setAddressValue] = useState('');
  const [tabs] = useState([
    { 
      id: 0, 
      title: 'New Tab', 
      url: 'chrome://newtab',
      icon: 'chrome',
      isActive: true
    },
    { 
      id: 2, 
      title: 'Github', 
      url: 'chrome://newtab',
      icon: 'chrome',
      isActive: false
    },
  ]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabClose = (e, tabId) => {
    e.stopPropagation();
    console.log('Close tab:', tabId);
  };

  const handleNewTab = () => {
    console.log('New tab clicked');
  };

  const handleNavigation = (action) => {
    console.log('Navigation:', action);
  };

  const handleAddressBarChange = (e) => {
    setAddressValue(e.target.value);
    console.log('URL changed:', e.target.value);
  };

  const handleStarClick = () => {
    console.log('Bookmark clicked');
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  const handleWindowControl = (action) => {
    console.log('Window control:', action);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            const tabIndex = parseInt(e.key) - 1;
            if (tabIndex < tabs.length) {
              setActiveTab(tabIndex);
            }
            break;
          case 't':
            e.preventDefault();
            handleNewTab();
            break;
          case 'w':
            e.preventDefault();
            handleTabClose(e, activeTab);
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, tabs.length]);

  return (
    <div className="app">
      <ChromeWindow
        tabs={tabs}
        activeTab={activeTab}
        addressValue={addressValue}
        onTabClick={handleTabClick}
        onTabClose={handleTabClose}
        onNewTab={handleNewTab}
        onBack={() => handleNavigation('back')}
        onForward={() => handleNavigation('forward')}
        onRefresh={() => handleNavigation('refresh')}
        onAddressChange={handleAddressBarChange}
        onStarClick={handleStarClick}
        onMenuClick={handleMenuClick}
        onMinimize={() => handleWindowControl('minimize')}
        onMaximize={() => handleWindowControl('maximize')}
        onClose={() => handleWindowControl('close')}
      >
        <h2>App goes here</h2>
        <p>This is the content area of the Chrome browser window.</p>
        <p>Try keyboard shortcuts: Ctrl+1-9 to switch tabs, Ctrl+T for new tab, Ctrl+W to close tab</p>
      </ChromeWindow>
    </div>
  );
}

export default App;
