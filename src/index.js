import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

const Main = lazy(() => import("./Main"));
const TestSection = lazy(() => import("./components/TestSection"));
const isDeveloping = false;

ReactDOM.render(
  <Suspense fallback={<div>Loading Kromac UI...</div>}>
    {!isDeveloping ? <Main /> : <TestSection />}
  </Suspense>,
  document.getElementById("root")
);
