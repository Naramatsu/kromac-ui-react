const subTitle = "Spinner rainbow";
const importType = `import Spinner from "kromac-ui/dist/Spinner";`;

const spinnerProps = {
  spinnerType: "rainbow"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Spinner </span>
      <span className="var">
        spinnerType
      </span>=<span className="string">"rainbow"</span>
      <span className="react"> /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["rainbow", "default lighter", "svg", "waves", "lighter"],
    description: "Spinner type."
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Spinner size."
  },
  {
    name: "bgColor",
    type: "string",
    values: [],
    description: "Set the background color inside."
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description:
      "This prop turned on places the spinner in the middle of the screen."
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
