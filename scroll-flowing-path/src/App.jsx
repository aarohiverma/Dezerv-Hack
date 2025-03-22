import { useEffect } from 'react'
import './App.css'
import photo1 from './assets/images/photo1.jpg'
import photo2 from './assets/images/photo2.jpg'
import photo3 from './assets/images/photo3.jpg'
import photo4 from './assets/images/photo4.jpg'
import photo5 from './assets/images/photo5.jpg'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const squiggle = document.querySelector('.squiggle path')
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      squiggle.style.strokeDashoffset = 1 - progress
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header>
        <h1>Dancehaus</h1>
      </header>

      <section>
        <figure className="pos1">
          <img src={photo1} alt="Dance photo 1" />
        </figure>

        <figure className="pos2">
          <img src={photo2} alt="Dance photo 2" />
        </figure>

        <figure className="pos3">
          <img src={photo3} alt="Dance photo 3" />
        </figure>

        <figure className="pos4">
          <img src={photo4} alt="Dance photo 4" />
        </figure>

        <figure className="pos5">
          <img src={photo5} alt="Dance photo 5" />
        </figure>
      </section>

      <footer>
        <nav>
          <a href="#">About</a>
          <a href="#">Join</a>
          <a href="#">Contact</a>
        </nav>

        <nav>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">TikTok</a>
        </nav>
      </footer>

      <svg
        width="1000"
        height="2000"
        viewBox="0 0 1000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggle"
      >
        <path
          d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
          stroke="#CD3C2F"
          strokeWidth="30"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}

export default App 