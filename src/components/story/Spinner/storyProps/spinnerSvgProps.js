const subTitle = "Spinner svg";
const importType = `import Spinner from "kromac/lib/Spinner";`;

const spinnerProps = {
  spinnerType: "svg"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Spinner </span>
      <span className="var">
        spinnerType
      </span>=<span className="string">"svg"</span>
      <span className="react"> /&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["svg", "default lighter", "waves", "rainbow", "lighter"],
    description: "Spinner type"
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Spinner size"
  },
  {
    name: "color",
    type: "string",
    values: ["default #fff"],
    description:
      "this prop is for set the bg color in the middle of the spinner"
  },
  {
    name: "bgColor",
    type: "string",
    values: ["default #000"],
    description: "this prop is for set the bg color in the area of the spinner"
  },
  {
    name: "fontColor",
    type: "string",
    values: ["default #fff"],
    description: "this prop is for set the color font of the dots and svg"
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
