const subTitle = "Button neon";
const importType = `import Button from "kromac/lib/Button";`;

const buttonProps = {
  buttonType: `neon`
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Button </span>
      <span className="component">
        buttonType
      </span>=<span className="string">"neon"</span>
      <span className="react">&gt;</span>
      <br />
      <span className="text tab2">Button Here</span>
      <br />
      <span className="react tab">&lt;/Button&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "buttonType",
    type: "string",
    values: ["neon", "default classic", "classic"],
    description: "Button type"
  },
  {
    name: "loading",
    type: "bool",
    values: ["default false"],
    description: "this prop show an spinner into the button"
  },
  {
    name: "disabled",
    type: "bool",
    values: [`default false`],
    description: "this prop disabled the button"
  },
  {
    name: "onClick",
    type: "function",
    values: [],
    description: ""
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "text you want to appear as button text"
  }
];

const buttonsProps = {
  subTitle,
  importType,
  buttonProps,
  propsDescription,
  componentText
};

export default buttonsProps;
