import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const Main = lazy(() => import("./Main"));
// console.log("OS pc => ", window.navigator.appVersion.toLowerCase());

ReactDOM.render(
  <Suspense fallback={<div>Loading Kromac UI...</div>}>
    <Main />
  </Suspense>,
  document.getElementById("root")
);
