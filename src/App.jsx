import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GrpDash from "./components/grp_dash"; // Import the group dashboard
import Login from "./components/Login"; // Import the Login component
import Learn from "./components/Learn";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/grp_dash" element={<GrpDash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
