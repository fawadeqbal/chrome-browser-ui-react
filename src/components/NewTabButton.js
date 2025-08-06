import React from 'react';
import { Plus } from 'lucide-react';

const NewTabButton = ({ onClick }) => {
  return (
    <div 
      className="new-tab"
      onClick={onClick}
      role="button"
      aria-label="New tab"
      tabIndex={0}
    >
      <Plus size={16} />
    </div>
  );
};

export default NewTabButton; 