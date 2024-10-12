
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/porto" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
