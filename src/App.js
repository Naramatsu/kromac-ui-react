import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./style.scss";
import data from "./utils/components.json";

const MenuKromac = lazy(() => import("./components/Menu"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const Card = lazy(() => import("./components/story/Card/Card.story"));
const Button = lazy(() => import("./components/story/Button/Button.story"));
const Panel = lazy(() => import("./components/story/Panel/Panel.story"));
const Spinner = lazy(() => import("./components/story/Spinner/Spinner.story"));
const Toggle = lazy(() => import("./components/story/Toggle/Toggle.story"));
const Menu = lazy(() => import("./components/story/Menu/Menu.story"));
const Skeleton = lazy(() =>
  import("./components/story/Skeleton/Skeleton.story")
);

const App = () =>
  <div className="App">
    <MenuKromac appName="Kromac UI" tabs={data} />
    <Switch>
      <Route path="/" exact strict component={LandingPage} />
      <Route path="/card" component={Card} />
      <Route path="/button" component={Button} />
      <Route path="/panel" component={Panel} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/skeleton" component={Skeleton} />
      <Route path="/toggle" component={Toggle} />
      <Route path="/menu" component={Menu} />
    </Switch>
  </div>;

export default App;
