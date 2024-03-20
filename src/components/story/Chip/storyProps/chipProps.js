const subTitle = "Chip";
const importType = (version) => `import Chip from "${version}/dist/Chip";`;

const chipProps = {};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Chip&gt;</span>
      <br />
      <span className="comment">{"// you content here...! "}</span>
      <br />
      <span className="text">Your name</span>
      <br />
      <span className="react">&lt;/Chip&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "color",
    type: "string",
    values: ["default #e4e4e4"],
    description: "Sets background color.",
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "html content.",
  },
];

const chipsProps = {
  chipProps,
  componentText,
  importType,
  propsDescription,
  subTitle,
};

export default chipsProps;
