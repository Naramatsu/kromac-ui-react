import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./style.scss";

const LandingPage = lazy(() => import("./components/LandingPage"));
const Card = lazy(() => import("./components/story/Card/Card.story"));
const Button = lazy(() => import("./components/story/Button/Button.story"));
const Panel = lazy(() => import("./components/story/Panel/Panel.story"));
const Spinner = lazy(() => import("./components/story/Spinner/Spinner.story"));
const Skeleton = lazy(() =>
  import("./components/story/Skeleton/Skeleton.story")
);

const App = () =>
  <div className="App">
    <Switch>
      <Route path="/" exact strict component={LandingPage} />
      <Route path="/card" component={Card} />
      <Route path="/button" component={Button} />
      <Route path="/panel" component={Panel} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/skeleton" component={Skeleton} />
    </Switch>
  </div>;

export default App;
