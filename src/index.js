import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

const Main = lazy(() => import("./Main"));

ReactDOM.render(
  <Suspense fallback={<div>Loading Kromac UI...</div>}>
    <Main />
  </Suspense>,
  document.getElementById("root")
);
