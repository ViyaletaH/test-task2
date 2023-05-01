import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/start">
        <span className="link" id="start">
          Startseite
        </span>
      </Link>
      <Link to="/">
        <span className="link" id="about">
          Über uns
        </span>
      </Link>
      <Link to="/contact">
        <span className="link" id="contact">
          Kontakt
        </span>
      </Link>
    </div>
  );
};

export default Navigation;
