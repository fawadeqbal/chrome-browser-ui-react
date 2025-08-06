import React from 'react';

const ContentArea = ({ children }) => {
  return (
    <div className="content-area">
      <div className="content-placeholder">
        {children}
      </div>
    </div>
  );
};

export default ContentArea; 