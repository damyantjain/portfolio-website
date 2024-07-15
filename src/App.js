import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./components/Portfolio";

const AppLayout = () => {
  return <Portfolio />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
