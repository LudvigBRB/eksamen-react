import React from "react";
//import "./App.css";
import apiFacade from "./apiFacade";
import AllRecipes from "./allRetrieve";

function App() {
  return (
    <div className="App">
      <h1>Opskrifts hjemmeside</h1>
      <AllRecipes apiFacade={apiFacade} />
    </div>
  );
}

export default App;
