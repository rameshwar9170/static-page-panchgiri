import React from 'react';

const BackToTop = ({ show, onClick }) => {
  return (
    <button
      id="backToTop"
      title="Back to Top"
      style={{ display: show ? 'block' : 'none' }}
      onClick={onClick}
    >
      &#8679;
    </button>
  );
};

export default BackToTop;
