import React from 'react';
import { Star, Search } from 'lucide-react';

const AddressBar = ({ 
  value, 
  placeholder, 
  onChange, 
  onStarClick 
}) => {
  return (
    <div className="address-bar">
      <Search size={16} color="#666666" style={{ marginRight: '8px', flexShrink: 0 }} />
      <input 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="address-input"
        aria-label="Address bar"
      />
      <button 
        className="star-icon"
        onClick={onStarClick}
        aria-label="Bookmark this page"
      >
        <Star size={14} />
      </button>
    </div>
  );
};

export default AddressBar; 