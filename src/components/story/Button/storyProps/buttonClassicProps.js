const subTitle = "Button classic";
const importType = `import Button from "kromac/lib/Button";`;

const buttonProps = {
  color: `primary`
};

const componentText = `<div>
  <Button color="primary">
    Button Here
  </Button>
</div>`;

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
