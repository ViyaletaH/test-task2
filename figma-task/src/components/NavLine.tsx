import { Link } from 'react-router-dom';

const NavLine = () => {
  return (
    <div className="nav-line">
      <div className="home">
        <img src="/home.png" alt="home" width="20px" height="20px" className="home" />
      </div>
      <Link to="/start">
        <span className="startseite">Startseite</span>
      </Link>
      <span className="nav-arrow">&gt;</span>
      <Link to="/">
        <span className="current">Uber uns</span>
      </Link>
    </div>
  );
};

export default NavLine;
