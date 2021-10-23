const subTitle = "Spinner svg";
const importType = `import Spinner from "kromac-ui/dist/Spinner";`;
const notes = `
<p> Soon you can send the svg you want in a property. </p>
`;

const spinnerProps = {
  spinnerType: "svg"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Spinner </span>
      <span className="var">
        spinnerType
      </span>=<span className="string">"svg"</span>
      <span className="react"> /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["svg", "default lighter", "waves", "rainbow", "lighter"],
    description: "Spinner type."
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Spinner size."
  },
  {
    name: "color",
    type: "string",
    values: ["default #fff"],
    description: "Set the background color inside."
  },
  {
    name: "bgColor",
    type: "string",
    values: ["default #000"],
    description: "Set the area background color of the spinner."
  },
  {
    name: "fontColor",
    type: "string",
    values: ["default #fff"],
    description: "Set the color font of the (rocket) dots (smoke)."
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description:
      "This prop turned on places the spinner in the middle of the screen."
  },
  {
    name: "shadows",
    type: "bool",
    values: ["default true"],
    description: "This prop added a shadows around the Spinner."
  }
];

const spinnersProps = {
  subTitle,
  importType,
  spinnerProps,
  propsDescription,
  notes,
  componentText
};

export default spinnersProps;
