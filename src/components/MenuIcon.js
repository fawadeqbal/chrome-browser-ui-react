import React from 'react';
import { MoreVertical } from 'lucide-react';

const MenuIcon = ({ onClick }) => {
  return (
    <div className="menu-icon">
      <button 
        className="nav-icon menu"
        onClick={onClick}
        aria-label="Menu"
      >
        <MoreVertical size={18} />
      </button>
    </div>
  );
};

export default MenuIcon; 