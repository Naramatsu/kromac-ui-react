const subTitle = "Panel transparent";
const importType = `import Panel from "kromac/lib/Panel";`;

const panelProp = {
  transparent: true
};

const componentText = `<div>
  <Panel transparent>
    html code here...
  </Panel>
</div>`;

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
