import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movies, About, Contact } from "../src/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="../pages/movies" component={Movies} />
        <Route path="../pages/about" component={About} />
        <Route path="../pages/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
