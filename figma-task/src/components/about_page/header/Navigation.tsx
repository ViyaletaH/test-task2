import { Link } from 'react-router-dom';

interface NavigationProps {
  clicked: boolean;
}

const Navigation = ({ clicked }: NavigationProps) => {
  return (
    <div className={`${clicked !== true ? 'navigation' : 'navigation-open'}`}>
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
