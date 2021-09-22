const subTitle = "Panel border neon";
const importType = `import Panel from "kromac/lib/Panel";`;

const panelProp = {
  borderNeon: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Panel </span>
      <span className="var">borderNeon</span>
      <span className="react">&gt;</span>
      <br />
      <span className="comment tab2">{`// html code here...`}</span>
      <br />
      <span className="react tab">&lt;/Panel&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "borderNeon",
    type: "bool",
    values: ["default false"],
    description: "if border neon will display"
  },
  {
    name: "transparent",
    type: "bool",
    values: [`default false`],
    description: "Panel caption color"
  },
  {
    name: "shadows",
    type: "bool",
    values: [`default true`],
    description: "this prop is to add a panel shadows"
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "any html tags"
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
