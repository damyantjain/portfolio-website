import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Portfolio />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
