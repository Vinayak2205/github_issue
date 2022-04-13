import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueMain from "./components/IssueMain";

function App() {
  // getData();
  return (
    <div className="container bg-color">
      <div className="row">
        <div className="col">
          <h1 className="text-white d-flex justify-content-center text-primary">
            Github Issue
          </h1>
          <IssueMain />
        </div>
      </div>
    </div>
  );
}

export default App;
