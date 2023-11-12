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
<<<<<<< HEAD
=======
import AddTime from "./pages/RangeDate";
import Manage from "./components/ManageMeeting/ManageMeetingContainer";
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3

function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD

=======
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3
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
