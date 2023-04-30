import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/start">
        <a className="start">Startseite</a>
      </Link>
      <Link to="/">
        <a className="about">Über uns</a>
      </Link>
      <Link to="/contact">
        <a className="contact">Kontakt</a>
      </Link>
    </div>
  );
};

export default Navigation;
