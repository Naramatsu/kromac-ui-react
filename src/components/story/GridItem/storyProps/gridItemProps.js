const subTitle = "Grid with custom items";
const importType = `import Grid from "kromac-ui/dist/GridItem";`;
const description = `
This component only works within kromac Grid component as shown in the implementation.
`;

const gridProps = {};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Grid&gt;</span>
      <br />
      <span className="tab react">&lt;GridItem </span>
      <br />
      <span className="tab2 component">clg</span>
      <span>{`={`}</span>
      <span className="text">1</span>
      <span>{`}`}</span>
      <br />
      <span className="tab2 component">cmd</span>
      <span>{`={`}</span>
      <span className="text">1</span>
      <span>{`}`}</span>
      <br />
      <span className="tab2 component">csm</span>
      <span>{`={`}</span>
      <span className="text">1</span>
      <span>{`}`}</span>
      <br />
      <span className="tab2 component">cxs</span>
      <span>{`={`}</span>
      <span className="text">4</span>
      <span>{`}`}</span>
      <br />
      <span className="tab2 component">gridRow</span>
      <span>{`={`}</span>
      <span className="text">2</span>
      <span>{`}`}</span>
      <br />
      <span className="tab react">&gt;</span>
      <br />
      <span className="tab2 comment">
        {"// you content here...! "}
      </span>
      <br />
      <span className="tab react">&lt;/GridItem&gt;</span>
      <br />
      <span className="tab comment">
        {"// others GridItem componentes...! "}
      </span>
      <br />
      <span className="react">&lt;/Grid&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "clg",
    type: "number",
    values: ["default 1"],
    description: "Column numbers when the screen is 1024px or higher."
  },
  {
    name: "cmd",
    type: "number",
    values: ["default 1"],
    description: "Column numbers when the screen is betwenn 1023px and 768px."
  },
  {
    name: "csm",
    type: "number",
    values: ["default 1"],
    description: "Column numbers when the screen is betwenn 767px and 550px."
  },
  {
    name: "cxs",
    type: "number",
    values: ["default 1"],
    description: "Column numbers when the screen is 549px or lower."
  },
  {
    name: "gridRow",
    type: "number",
    values: ["default 1"],
    description: "Row numbers."
  },

  {
    name: "children",
    type: "any",
    values: [],
    description: "html content."
  }
];

const gridsProps = {
  gridProps,
  description,
  componentText,
  importType,
  propsDescription,
  subTitle
};

export default gridsProps;
