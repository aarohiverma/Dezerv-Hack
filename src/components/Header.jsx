import { Link } from 'react-router-dom';
import './Header.css';

function Header({ hasScrolled }) {
  return (
    <header className={`main-header ${hasScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="header-link">
        <h1>SmartInvest</h1>
      </Link>
      <nav className="header-nav">
        <Link to="/learn" className="nav-link">Learn</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}

export default Header; 