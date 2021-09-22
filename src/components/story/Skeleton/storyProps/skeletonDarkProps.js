const subTitle = "Skeleton dark";
const importType = `import Skeleton from "kromac/lib/Panel";`;

const skeletonProp = { className: "dark", width: "250px" };

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Skeleton </span>
      <br />
      <span className="var tab2">
        className
      </span>=<span className="string">"dark"</span>
      <br />
      <span className="var tab2">
        width
      </span>=<span className="string">"250px"</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "height",
    type: "string",
    values: ["default 32px"],
    description: "skeleton height in px, em or whatever you want"
  },
  {
    name: "width",
    type: "string",
    values: [`default 100%`],
    description: "skeleton width in px, em or whatever you want"
  },
  {
    name: "borderRadius",
    type: "string",
    values: [`default none`],
    description: "skeleton border radius in px, em or %"
  },
  {
    name: "className",
    type: "string",
    values: ["dark", "default light", "light"],
    description: "skeleton theme"
  }
];

const skeletonProps = {
  subTitle,
  importType,
  skeletonProp,
  propsDescription,
  componentText
};

export default skeletonProps;
