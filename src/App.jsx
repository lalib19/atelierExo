import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mash from "./pages/Mash";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Mash />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
