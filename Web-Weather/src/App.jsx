import React from "react";
import CurrentLocation from "./currentLocation.jsx";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Saksham6543">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/saksham-chauhan/">
          Saksham Chauhan
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
