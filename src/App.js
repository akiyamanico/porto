
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Exhibition from "./Pages/Exhibition/Exhibition";
import CursorGlitch from "./Component/CursorGlitch";

const App = () => {
  return (
    <Router>
      <CursorGlitch />
      <Routes>
        <Route exact path="/porto" element={<Home />} />
        <Route path="/porto/exhibition" element={<Exhibition />} />
      </Routes>
    </Router>
  );
};

export default App;
