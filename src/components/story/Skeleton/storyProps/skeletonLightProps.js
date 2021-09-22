const subTitle = "Skeleton light";
const importType = `import Skeleton from "kromac/lib/Panel";`;

const skeletonProp = { width: "250px" };

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Skeleton </span>
      <span className="var">width</span>=<span className="string">"250px"</span>
      <span className="react">/&gt;</span>
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
    values: ["default light", "dark", "light"],
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
