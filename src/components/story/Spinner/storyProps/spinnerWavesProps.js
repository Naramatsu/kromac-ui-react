const subTitle = "Spinner waves";
const importType = `import Spinner from "kromac-ui/dist/Spinner";`;

const spinnerProps = {
  spinnerType: "waves"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Spinner </span>
      <span className="var">
        spinnerType
      </span>=<span className="string">"waves"</span>
      <span className="react"> /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["waves", "default lighter", "svg", "rainbow", "lighter"],
    description: "Spinner type."
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Sets Spinner size."
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description:
      "When this prop is turned on, it fixed the spinner in the middle of the screen."
  },
  {
    name: "shadows",
    type: "bool",
    values: ["default true"],
    description: "Adds a shadows around the Spinner."
  }
];

const spinnersProps = {
  componentText,
  importType,
  propsDescription,
  spinnerProps,
  subTitle
};

export default spinnersProps;
