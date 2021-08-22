const subTitle = "Spinner rainbow";
const importType = `import Spinner from "kromac/lib/Spinner";`;

const spinnerProps = {
  spinnerType: "rainbow"
};

const componentText = `<div>
  <Spinner spinnerType="rainbow" />
</div>`;

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["rainbow", "default lighter", "svg", "waves", "lighter"],
    description: "Spinner type"
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Spinner size"
  },
  {
    name: "bgColor",
    type: "string",
    values: [],
    description:
      "this prop is for set the bg color in the middle of the spinner"
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
