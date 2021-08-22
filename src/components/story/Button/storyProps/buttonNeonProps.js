const subTitle = "Button neon";
const importType = `import Button from "kromac/lib/Button";`;

const buttonProps = {
  buttonType: `neon`
};

const componentText = `<div>
  <Button buttonType="neon">
    Button Here
  </Button>
</div>`;

const propsDescription = [
  {
    name: "buttonType",
    type: "string",
    values: ["neon", "default classic", "classic"],
    description: "Button type"
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
