import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReservationForm from "./pages/Form";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservation/:name" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
