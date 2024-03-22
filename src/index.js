import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import PreferencesState from "./store/PreferencesState";
import "./css/style.css";

const Main = lazy(() => import("./Main"));
const TestSection = lazy(() => import("./components/TestSection"));
const isDeveloping = false;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <PreferencesState>
    <Suspense fallback={<div>Loading Kromac UI...</div>}>
      {!isDeveloping ? <Main /> : <TestSection />}
    </Suspense>
  </PreferencesState>
);
