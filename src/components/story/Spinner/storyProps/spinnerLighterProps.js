const subTitle = "Spinner lighter";
const importType = `import Spinner from "kromac/lib/Spinner";`;

const spinnerProps = {};

const componentText = `<div>
  <Spinner />
</div>`;

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["default lighter", "waves", "svg", "rainbow", "lighter"],
    description: "Spinner type"
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Spinner size"
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description: "this prop place the spinner in the middle of the screen"
  },
  {
    name: "shadows",
    type: "bool",
    values: ["default true"],
    description: "this prop added a box shadows"
  }
];

const spinnersProps = {
  subTitle,
  importType,
  spinnerProps,
  propsDescription,
  componentText
};

export default spinnersProps;
