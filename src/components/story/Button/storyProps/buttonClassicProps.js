const subTitle = "Button classic";
const importType = `import Button from "kromac/lib/Button";`;

const buttonProps = {
  color: `primary`,
  loading: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Button </span>
      <span className="component">
        color
      </span>=<span className="string">"primary"</span>
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
    values: ["default classic", "classic", "neon"],
    description: "Button type"
  },
  {
    name: "color",
    type: "string",
    values: [
      `default primary`,
      "transparent",
      "primary",
      "success",
      "warning",
      "error",
      "danger",
      "info",
      "dark"
    ],
    description: "button caption color"
  },
  {
    name: "className",
    type: "string",
    values: [`text-bg-dark`, `text-bg-light`],
    description: "this prop only affect the button text"
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
