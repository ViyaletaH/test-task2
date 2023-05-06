import Navigation from './Navigation';
import { useState } from 'react';

const Header = () => {
  const [linesClicked, setLinesClicked] = useState(false);

  const handleLinesClick = () => {
    linesClicked == false ? setLinesClicked(true) : setLinesClicked(false);
  }

  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="lines" onClick={handleLinesClick}>
        <span className="line" id="first-line"></span>
        <span className="line-active" id="second-line"></span>
        <span className="line" id="third-line"></span>
      </div>

      <Navigation />
    </div>
  );
};

export default Header;
