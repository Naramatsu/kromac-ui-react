const subTitle = "Panel transparent";
const importType = `import Panel from "kromac-ui/dist/Panel";`;

const panelProp = {
  transparent: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Panel </span>
      <span className="var">transparent</span>
      <span className="react">&gt;</span>
      <br />
      <span className="comment tab">{`// html code here...`}</span>
      <br />
      <span className="react">&lt;/Panel&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "borderNeon",
    type: "bool",
    values: ["default false"],
    description:
      "This prop causes the background panel becomes dark and show a border neon."
  },
  {
    name: "transparent",
    type: "bool",
    values: [`default false`],
    description:
      "This prop causes the background panel becomes transparent and blurred."
  },
  {
    name: "shadows",
    type: "bool",
    values: [`default true`],
    description: "This prop add a box-shadows around the Panel."
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Panel content, you can write html code inside."
  }
];

const panelProps = {
  subTitle,
  importType,
  panelProp,
  propsDescription,
  componentText
};

export default panelProps;
