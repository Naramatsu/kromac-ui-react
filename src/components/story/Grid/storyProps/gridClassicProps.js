const subTitle = "Grid classic";
const storyLink = "/?path=/docs/kromac-ui-grid--docs";
const importType = (version) => `import Grid from "${version}/dist/Grid";`;

const gridProps = {};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Grid&gt;</span>
      <br />
      <span className="comment">{"// you content here...! "}</span>
      <br />
      <span className="react">&lt;/Grid&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "columns",
    type: "number",
    values: ["default 4"],
    description: "Columns number of grid, min 1 max 24.",
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "html content.",
  },
];

const gridsProps = {
  gridProps,
  componentText,
  importType,
  propsDescription,
  subTitle,
  storyLink,
};

export default gridsProps;
