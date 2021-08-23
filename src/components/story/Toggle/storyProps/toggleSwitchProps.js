const subTitle = "Toggle switch";
const importType = `import Toggle from "kromac/lib/Panel";`;

const toggleProp = {};

const componentText = `<div>
  <Toggle />
</div>`;

const propsDescription = [
  {
    name: "toggleType",
    type: "string",
    values: ["default switch", "power", "switch"],
    description: "toggle appereance"
  },
  {
    name: "checked",
    type: "bool",
    values: ["default false"],
    description: "props to indicate if it is checked or not"
  },
  {
    name: "onColor",
    type: "string",
    values: [`default #28B463`],
    description: "color when the toggle is checked"
  },
  {
    name: "offColor",
    type: "string",
    values: [`default #CB4335`],
    description: "color when the toggle is not checked"
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
