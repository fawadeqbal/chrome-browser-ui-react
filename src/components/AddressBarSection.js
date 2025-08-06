import React from 'react';
import NavigationIcons from './NavigationIcons';
import AddressBar from './AddressBar';
import MenuIcon from './MenuIcon';

const AddressBarSection = ({ 
  addressValue,
  onBack, 
  onForward, 
  onRefresh, 
  onAddressChange, 
  onStarClick, 
  onMenuClick 
}) => {
  return (
    <div className="address-bar-section">
      <NavigationIcons 
        onBack={onBack}
        onForward={onForward}
        onRefresh={onRefresh}
      />
      
      <AddressBar 
        value={addressValue}
        placeholder="Search Google or type a URL"
        onChange={onAddressChange}
        onStarClick={onStarClick}
      />

      <MenuIcon onClick={onMenuClick} />
    </div>
  );
};

export default AddressBarSection; 