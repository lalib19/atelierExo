import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Arena from "./pages/Arena";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Arena />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
