import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
console.log("OS pc => ", window.navigator.appVersion.toLowerCase());

ReactDOM.render(<Main />, document.getElementById("root"));
