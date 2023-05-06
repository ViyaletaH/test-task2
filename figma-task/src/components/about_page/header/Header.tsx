import Navigation from './Navigation';
import { useState } from 'react';

interface HeaderProps {
  handleDarken: (linesClicked: boolean) => void;
}

const Header = ({handleDarken}: HeaderProps) => {
  const [linesClicked, setLinesClicked] = useState(false);

  const handleLinesClick = () => {
    const newLinesClicked = !linesClicked;
    setLinesClicked(newLinesClicked);
    handleDarken(newLinesClicked);
  };

  

  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="lines" onClick={handleLinesClick} >
        <span
          className={`${linesClicked !== true ? 'line' : 'line-active'}`}
          id="first-line"
        ></span>
        <span
          className={`${linesClicked === true ? 'line' : 'line-active'}`}
          id="second-line"
        ></span>
        <span
          className={`${linesClicked !== true ? 'line' : 'line-active'}`}
          id="third-line"
        ></span>
      </div>
      <Navigation clicked={linesClicked} />
    </div>
  );
};

export default Header;
