import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Creation from "./pages/Creation";
import Manage from "./components/ManageMeeting/ManageMeetingContainer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/create" element={<Creation />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
