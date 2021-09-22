const subTitle = "Toggle power";
const importType = `import Toggle from "kromac/lib/Panel";`;

const toggleProp = {
  toggleType: "power"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Toggle </span>
      <span className="var">
        toggleType
      </span>=<span className="string">"power"</span>
      <span className="react"> /&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

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
