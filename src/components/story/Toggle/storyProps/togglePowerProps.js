const subTitle = "Toggle power";
const importType = `import Toggle from "kromac/lib/Panel";`;

const toggleProp = {
  toggleType: "power"
};

const componentText = `<div>
  <Toggle toggleType="power" />
</div>`;

const propsDescription = [
  {
    name: "toggleType",
    type: "string",
    values: ["power", "default switch", "switch"],
    description: "toggle appereance"
  },
  {
    name: "checked",
    type: "bool",
    values: ["default false"],
    description: "props to indicate if it is checked or not"
  },
  {
    name: "size",
    type: "string",
    values: ["default md", "sm", "md", "lg"],
    description: "toggle size"
  },
  {
    name: "onChange",
    type: "function",
    values: [],
    description: "function to handdle the toggle change event"
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
