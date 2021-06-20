import React, { Component } from "react";

function App() {
  return (
    <h1>
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked")}} /> 
      </React.Fragment>
    </h1>
  );
}

export default App;
