import './Header.css';

function Header({ hasScrolled }) {
  return (
    <header className={`main-header ${hasScrolled ? 'scrolled' : ''}`}>
      <h1>SmartInvest</h1>
    </header>
  );
}

export default Header; 