const subTitle = "Spinner lighter";
const storyLink = "/?path=/docs/kromac-ui-spinner-lighter--docs";
const notes = `
When the <div class="chip">isCentered</div> prop is turned on, the
<div class="chip">size</div> prop will not work.
<br />
The value of <div class="chip">bgColorInside</div> prop only can be
<div class="chip">#000</div>,
<div class="chip">black</div>,
<div class="chip">#fff</div>,
<div class="chip">white</div>.
`;

const spinnerProps = {};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Spinner /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "spinnerType",
    type: "string",
    values: ["default lighter", "waves", "svg", "rainbow", "lighter"],
    description: "Spinner type.",
  },
  {
    name: "size",
    type: "string",
    values: [`default sm`, "sm", "md", "lg"],
    description: "Sets Spinner size.",
  },
  {
    name: "isCentered",
    type: "bool",
    values: [`default false`],
    description:
      "When this prop is turned on, it fixed the spinner in the middle of the screen.",
  },
  {
    name: "bgColorInside",
    type: "string",
    values: ["default #fff", "#000", "#fff"],
    description: "Sets background color inside the Spinner.",
  },
  {
    name: "shadows",
    type: "bool",
    values: ["default true"],
    description: "Adds a shadows around the Spinner.",
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
