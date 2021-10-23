const subTitle = "Toggle switch";
const importType = `import Toggle from "kromac-ui/dist/Panel";`;

const toggleProp = {};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Toggle /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "toggleType",
    type: "string",
    values: ["default switch", "power", "switch"],
    description: "Toggle appearance."
  },
  {
    name: "checked",
    type: "bool",
    values: ["default false"],
    description: "This prop indicates whether it is checked or not."
  },
  {
    name: "onColor",
    type: "string",
    values: [`default #28B463`],
    description: "Set the color when the toggle is checked."
  },
  {
    name: "offColor",
    type: "string",
    values: [`default #CB4335`],
    description: "Set the color when the toggle is not checked."
  },
  {
    name: "onChange",
    type: "function",
    values: [],
    description: ""
  }
];

const toggleProps = {
  subTitle,
  importType,
  toggleProp,
  propsDescription,
  componentText
};

export default toggleProps;
