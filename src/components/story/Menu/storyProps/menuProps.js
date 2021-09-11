const subTitle = "Menu";
const importType = `import Menu from "kromac/lib/Menu";`;

const notes = `this component needs extrictly be wrapped by <div class="chip">react-router-dom</div> components. <br />
              if you have a lot of tabs, do not worry, the scroll is functional but is transparent
              `;

const menuProps = {
  appName: "Some title",
  tabs: ["home", "menu"]
};

const componentText = `<div>
  <Menu 
    appName = "Some title",
    tabs = ["home","menu"]
  />
</div>`;

const propsDescription = [
  {
    name: "appName",
    type: "string",
    values: [],
    description: "your app name"
  },
  {
    name: "imgLogo",
    type: "string",
    values: [],
    description:
      "If you have an image, you can add, but be carefull, if you want a better experience, it must be rectangular"
  },
  {
    name: "tabs",
    type: "array",
    values: [],
    description:
      "tabs that will show in the menu it must be an array of strings"
  },
  {
    name: "searchComponents",
    type: "bool",
    values: ["default false"],
    description:
      "if you have a lot of tabs, this prop add an input to search by tab name"
  },
  {
    name: "bgColor",
    type: "string",
    values: ["default #283747"],
    description: "background color of the menu"
  },
  {
    name: "hamburgerColor",
    type: "string",
    values: ["default #283747"],
    description: "background color of the float hamburgermenu button"
  },
  {
    name: "hamburgerActiveColor",
    type: "string",
    values: ["default #C0392B"],
    description:
      "background color of the float hamburgermenu button when this is active"
  },
  {
    name: "homeUrl",
    type: "string",
    values: ["default /"],
    description:
      "Link to redirect to home page"
  }
];

const buttonsProps = {
  subTitle,
  importType,
  menuProps,
  propsDescription,
  componentText,
  notes
};

export default buttonsProps;
