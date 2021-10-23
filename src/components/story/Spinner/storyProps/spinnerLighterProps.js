const subTitle = "Spinner lighter";
const importType = `import Spinner from "kromac-ui/dist/Spinner";`;
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
    name: "bgColorInside",
    type: "string",
    values: ["default #fff", "#000", "#fff"],
    description: "Set the background color inside."
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
