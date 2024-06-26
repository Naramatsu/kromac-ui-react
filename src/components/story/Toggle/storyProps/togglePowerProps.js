const subTitle = "Toggle power";
const storyLink = "/?path=/story/kromac-ui-toggle--power";

const toggleProp = {
  toggleType: "power",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Toggle </span>
      <span className="var">toggleType</span>=
      <span className="string">"power"</span>
      <span className="react"> /&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "toggleType",
    type: "string",
    values: ["power", "default switch", "switch"],
    description: "Toggle type.",
  },
  {
    name: "checked",
    type: "bool",
    values: ["default false"],
    description: "This prop indicates whether it is checked or not.",
  },
  {
    name: "onChange",
    type: "function",
    values: [],
    description: "",
  },
];

const toggleProps = {
  componentText,
  propsDescription,
  subTitle,
  toggleProp,
  storyLink,
};

export default toggleProps;
