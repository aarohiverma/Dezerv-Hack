import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';
import Footer from './Footer';

function Learn() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollPosition === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="learn-page">
      <header className={`main-header ${hasScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="header-link">
          <h1>SmartInvest</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/learn" className="nav-link">Learn</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>
      
      <main className="learn-content">
        <h2 className="learn-title">Why to Invest?</h2>
        
        <div className="intro-section">
          <div className="animated-tree">
            <svg viewBox="0 0 100 200" className="tree-svg">
              {/* Tree trunk */}
              <path 
                className="tree-trunk" 
                d="M45,180 Q50,160 50,140" 
                fill="none" 
                stroke="#5D4037"
                strokeWidth="8"
              />
              {/* Tree branches */}
              <g className="tree-branches">
                <path d="M50,140 Q40,120 30,110" className="branch" />
                <path d="M50,140 Q60,120 70,110" className="branch" />
                <path d="M50,160 Q40,150 30,145" className="branch" />
                <path d="M50,160 Q60,150 70,145" className="branch" />
              </g>
              {/* Tree leaves */}
              <g className="tree-leaves">
                <circle cx="30" cy="110" r="10" className="leaf" />
                <circle cx="70" cy="110" r="10" className="leaf" />
                <circle cx="30" cy="145" r="8" className="leaf" />
                <circle cx="70" cy="145" r="8" className="leaf" />
                <circle cx="50" cy="100" r="15" className="leaf" />
              </g>
              {/* Money symbols */}
              <g className="money-symbols">
                <text x="25" y="105" className="money">$</text>
                <text x="65" y="105" className="money">$</text>
                <text x="45" y="95" className="money">$</text>
              </g>
            </svg>
          </div>
          
          <p className="intro-text">
            Investing is like planting a money tree. You put your funds into various "pots" (assets), 
            hoping they'll grow over time. One of the most popular "gardens" for these money trees 
            is the stock market.
          </p>
        </div>

        <div className="stock-market-section">
          <p className="market-text">
            Imagine the stock market as a bustling marketplace where people trade tiny pieces 
            of companies called shares. When you buy a share, you're essentially becoming a 
            company's part-owner.
          </p>

          <div className="market-animation">
            <svg viewBox="0 0 200 200" className="market-svg">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="15"
                  markerHeight="12"
                  refX="2"
                  refY="2"
                  orient="auto"
                >
                  <polygon points="0 0, 15 6, 0 12" fill="#CD3C2F" />
                </marker>
              </defs>
              
              {/* Building */}
              <g className="building">
                <rect x="40" y="60" width="80" height="120" className="building-body" />
                {/* Windows */}
                <g className="windows">
                  {[0, 1, 2, 3, 4].map((row) => (
                    [0, 1, 2].map((col) => (
                      <rect 
                        key={`${row}-${col}`}
                        x={50 + col * 20} 
                        y={70 + row * 25} 
                        width="10" 
                        height="15" 
                        className="window"
                      />
                    ))
                  ))}
                </g>
                {/* Door */}
                <rect x="70" y="160" width="20" height="20" className="door" />
              </g>
              {/* Stock Line */}
              <path 
                d="M20,150 Q50,140 80,160 T140,130 T190,110" 
                className="stock-line"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <h1 className="cool-heading">cool right?</h1>

        <div className="compounding-section">
          <h2>Why start investing early? Power of compounding</h2>
          <p className="compounding-text">
            Imagine you have a magical piggy bank that not only keeps your money safe but also multiplies it over time. That's essentially what compounding does for your investments. It's the process where your money earns returns, and then those returns start earning their own returns. It's like a snowball effect for your wealth!
          </p>
          <p className="compounding-text">
            But here's the real kicker: <span className="highlight-text">the earlier you start, the more powerful this magic becomes.</span>
          </p>
          <p className="compounding-text">
            Starting early is like giving your money a head start in a marathon. Even small amounts invested in your youth can grow into substantial sums by the time you're older. This is because compounding works best over long periods.
          </p>
        </div>
      </main>
      <Footer hasScrolled={hasScrolled} />
    </div>
  );
}

export default Learn;
