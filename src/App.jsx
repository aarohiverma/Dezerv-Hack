import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GrpDash from "./components/grp_dash"; // Import the group dashboard

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/grp_dash" element={<GrpDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
