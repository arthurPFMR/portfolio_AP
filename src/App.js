import React from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Carrer";
import Contact from "./pages/Contact";

const App = () => {

  return (
    <div className="noise">
      <Home />
      <Portfolio />
      <Career />
      <Contact />
    </div>
  );
};

export default App;
