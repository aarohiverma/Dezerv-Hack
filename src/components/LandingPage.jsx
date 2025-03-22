import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation
import Header from './Header';
import Footer from './Footer';
import './LandingPage.css';

function LandingPage() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distance = window.scrollY;
      const totalDistance = svgRef.current.clientHeight - window.innerHeight;
      const percentage = distance / totalDistance;
      const pathLength = pathRef.current.getTotalLength();

      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;

      if (!hasScrolled && distance > 10) {
        setHasScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className={`landing-page ${hasScrolled ? 'scrolled' : ''}`}>
      <Header hasScrolled={hasScrolled} />

      <section>
        <figure className="pos1">
          <img src="/images/photo1.jpg" alt="Investment Strategy" />
        </figure>

        <figure className="pos2">
          <img src="/images/photo2.jpg" alt="Financial Planning" />
        </figure>

        <figure className="pos3">
          <img src="/images/photo3.jpg" alt="Market Analysis" />
        </figure>

        <figure className="pos4">
          <img src="/images/photo4.jpg" alt="Portfolio Management" />
        </figure>

        <figure className="pos5">
          <img src="/images/photo5.jpg" alt="Wealth Growth" />
        </figure>
      </section>

      {/* ✅ Add button to navigate to Group Dashboard */}
      <div className="dashboard-button-container">
        <Link to="/grp_dash">
          <button className="dashboard-button">Go to Group Dashboard</button>
        </Link>
      </div>

      <Footer hasScrolled={hasScrolled} />

      <svg
        ref={svgRef}
        width="1000"
        height="2000"
        viewBox="0 0 1000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggle"
      >
        <path
          ref={pathRef}
          d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
          stroke="#CD3C2F"
          strokeWidth="30"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default LandingPage;
