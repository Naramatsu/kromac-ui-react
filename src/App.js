import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./style.scss";
import data from "./utils/components.json";

const KromacMenu = lazy(() => import("./components/lib/Menu"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const Card = lazy(() => import("./components/story/Card/Card.story"));
const Button = lazy(() => import("./components/story/Button/Button.story"));
const Panel = lazy(() => import("./components/story/Panel/Panel.story"));
const Spinner = lazy(() => import("./components/story/Spinner/Spinner.story"));
const Toggle = lazy(() => import("./components/story/Toggle/Toggle.story"));
const Menu = lazy(() => import("./components/story/Menu/Menu.story"));
const Banner = lazy(() => import("./components/story/Banner/Banner.story"));
const Gallery = lazy(() => import("./components/story/Gallery/Gallery.story"));
const Slider = lazy(() => import("./components/story/Slider/Slider.story"));
const TextAnimation = lazy(() =>
  import("./components/story/TextAnimation/TextAnimation.story")
);
const Skeleton = lazy(() =>
  import("./components/story/Skeleton/Skeleton.story")
);

const tabs = data.map(c => c.component).sort();

const App = () =>
  <div className="App">
    <div className="h-menu-kromac">
      <KromacMenu appName="Kromac UI" tabs={tabs} searchComponents />
    </div>
    <Switch>
      <Route path="/" exact strict component={LandingPage} />
      <Route path="/card" component={Card} />
      <Route path="/button" component={Button} />
      <Route path="/panel" component={Panel} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/skeleton" component={Skeleton} />
      <Route path="/toggle" component={Toggle} />
      <Route path="/menu" component={Menu} />
      <Route path="/textAnimation" component={TextAnimation} />
      <Route path="/banner" component={Banner} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/slider" component={Slider} />
    </Switch>
  </div>;

export default App;
