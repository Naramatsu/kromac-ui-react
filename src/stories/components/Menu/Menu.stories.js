import { Menu as PrevMenu } from "./Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Menu = (props) => (
  <Router>
    <Route path="/">
      <section style={{ height: "300px" }}>
        <PrevMenu {...props} />
      </section>
    </Route>
  </Router>
);

export default {
  title: "Kromac UI: Menu",
  component: Menu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const Default = {
  args: {
    imgLogo: "",
    appName: "Some title",
    tabs: ["home", "menu"],
    searchComponents: false,
    bgColor: "#283747",
    hamburgerColor: "#283747",
    hamburgerActiveColor: "#C0392B",
    homeUrl: "/",
    transition: ".5s",
  },
};
