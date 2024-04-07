const subTitle = "Button classic";
const storyLink = "/?path=/docs/kromac-ui-button--docs";

const buttonProps = {
  color: `primary`,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Button </span>
      <span className="component">color</span>=
      <span className="string">"primary"</span>
      <span className="react">&gt;</span>
      <br />
      <span className="text tab">Button Here</span>
      <br />
      <span className="react">&lt;/Button&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "buttonType",
    type: "string",
    values: ["default classic", "classic", "neon"],
    description: "Button type.",
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
      "dark",
    ],
    description: "Sets background color of the component.",
  },
  {
    name: "loading",
    type: "bool",
    values: ["default false"],
    description: "This prop displayed a spinner into the button.",
  },
  {
    name: "disabled",
    type: "bool",
    values: [`default false`],
    description: "This prop disables the button.",
  },
  {
    name: "onClick",
    type: "function",
    values: [],
    description: "",
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Button content.",
  },
];

const buttonsProps = {
  buttonProps,
  componentText,
  propsDescription,
  subTitle,
  storyLink,
};

export default buttonsProps;
