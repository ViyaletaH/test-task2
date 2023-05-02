import React from 'react';

const NameBar = () => {
  return (
    <div className="name-bar">
      <span className="about-name">Über Uns</span>
      <img
        src="/content-name-bg.png"
        alt="name background"
        width="91%"
        height="100%"
        className="name-bg"
      />
    </div>
  );
};

export default NameBar;
