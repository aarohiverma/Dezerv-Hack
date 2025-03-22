import './Footer.css';

function Footer({ hasScrolled }) {
  return (
    <footer className={hasScrolled ? 'scrolled' : ''}>
      <nav>
        <a href="#">Learn</a>
        <a href="#">Invest</a>
        <a href="#">About</a>
      </nav>

      <div className="credits">
        made with <span className="heart">💜</span> by mathGang
      </div>
    </footer>
  );
}

export default Footer; 