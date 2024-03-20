const subTitle = "Spinner svg";
const notes = `
<p> Soon you could be allowed to send a svg you want in a property. </p>
`;

const spinnerProps = {
  spinnerType: "svg",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Spinner </span>
      <span className="var">spinnerType</span>=
      <span className="string">"svg"</span>
      <span className="react"> /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["svg", "default lighter", "waves", "rainbow", "lighter"],
    description: "Spinner type.",
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Sets Spinner size.",
  },
  {
    name: "color",
    type: "string",
    values: ["default #fff"],
    description: "Set background inner color.",
  },
  {
    name: "bgColor",
    type: "string",
    values: ["default #000"],
    description: "Sets background color Spinner.",
  },
  {
    name: "fontColor",
    type: "string",
    values: ["default #fff"],
    description: "Sets the font color of the dots (smoke).",
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description:
      "When this prop is turned on, it fixed the spinner in the middle of the screen.",
  },
  {
    name: "shadows",
    type: "bool",
    values: ["default true"],
    description: "This prop added a shadows around the Spinner.",
  },
];

const spinnersProps = {
  componentText,
  notes,
  propsDescription,
  spinnerProps,
  subTitle,
};

export default spinnersProps;
