const subTitle = "Spinner rainbow";
const storyLink = "/?path=/docs/kromac-ui-spinner-rainbow--docs";
const notes = `
When the <div class="chip">isCentered</div> prop is turned on, the
<div class="chip">size</div> prop will not work.
`;
const spinnerProps = {
  spinnerType: "rainbow",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Spinner </span>
      <span className="var">spinnerType</span>=
      <span className="string">"rainbow"</span>
      <span className="react"> /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["rainbow", "default lighter", "svg", "waves", "lighter"],
    description: "Spinner type.",
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Sets Spinner size.",
  },
  {
    name: "bgColor",
    type: "string",
    values: [],
    description: "Sets background color inside the Spinner.",
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description:
      "When this prop is turned on, it fixed the spinner in the middle of the screen.",
  },
];

const spinnersProps = {
  componentText,
  notes,
  propsDescription,
  spinnerProps,
  subTitle,
  storyLink,
};

export default spinnersProps;
