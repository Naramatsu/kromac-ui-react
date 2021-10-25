const subTitle = "Panel border neon";
const importType = `import Panel from "kromac-ui/dist/Panel";`;

const panelProp = {
  borderNeon: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Panel </span>
      <span className="var">borderNeon</span>
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
      "Turns Panel background color dark and shows a neon border around."
  },
  {
    name: "transparent",
    type: "bool",
    values: [`default false`],
    description: "Turns Panel background transparent and adds a blurred effect."
  },
  {
    name: "shadows",
    type: "bool",
    values: [`default true`],
    description: "This prop adds a box-shadows around the Panel."
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Panel content, you can write html code inside."
  }
];

const panelProps = {
  componentText,
  importType,
  panelProp,
  propsDescription,
  subTitle
};

export default panelProps;
