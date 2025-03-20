import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";
import Cv from "./Pages/Cv";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Interviews from "./Pages/Interviews";

function App() {
  return (
    <div className="bg-[#120F25] w-full h-full">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/interview" element={<Interviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
