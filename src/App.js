import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import data from "./utils/components.json";

const ReleaseInfo = lazy(() => import("./components/ReleaseInfo"));
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
const Avatar = lazy(() => import("./components/story/Avatar/Avatar.story"));
const Grid = lazy(() => import("./components/story/Grid/Grid.story"));
const GridItem = lazy(() => import("./components/story/GridItem/GridItem.story"));
const KromacClass = lazy(() =>
  import("./components/story/KromacClass/KromacClass.story")
);
const Toast = lazy(() => import("./components/story/Toast/Toast.story"));
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
      <KromacMenu
        appName="Kromac UI"
        tabs={tabs}
        searchComponents
        imgLogo="https://res.cloudinary.com/dxg9gszax/image/upload/v1634697765/kromac-ui/kromac-logov2_cov1m7.png"
      />
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
      <Route path="/avatar" component={Avatar} />
      <Route path="/class" component={KromacClass} />
      <Route path="/toast" component={Toast} />
      <Route path="/grid" component={Grid} />
      <Route path="/gridItem" component={GridItem} />
      <Route path="/releases" component={ReleaseInfo} />
      <Route path="/kromac">
        <Redirect to="/" />
      </Route>
    </Switch>
  </div>;

export default App;
