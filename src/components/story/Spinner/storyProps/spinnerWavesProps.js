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
    description: "Spinner size."
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
  componentText
};

export default spinnersProps;
