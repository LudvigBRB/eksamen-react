import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Function from "./functions";
import apiFacade from "./apiFacade";

ReactDOM.render(
  <Function apiFacade={apiFacade} />,
  document.getElementById("root")
);
