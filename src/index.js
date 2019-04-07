import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

const App = () => {
  return <div className={style.button}>Hello React!</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
