const subTitle = "Skeleton light";

const skeletonProp = { width: "250px" };

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Skeleton </span>
      <span className="var">width</span>=
      <span className="string">"250px" </span>
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "height",
    type: "string",
    values: ["default 32px"],
    description: "Skeleton height in px, em or whatever valid format you want.",
  },
  {
    name: "width",
    type: "string",
    values: [`default 100%`],
    description: "Skeleton width in px, em or whatever valid format you want.",
  },
  {
    name: "borderRadius",
    type: "string",
    values: [`default none`],
    description: "Skeleton border radius in px, em or %.",
  },
  {
    name: "className",
    type: "string",
    values: ["default light", "dark", "light"],
    description: "Skeleton theme.",
  },
];

const skeletonProps = {
  subTitle,
  skeletonProp,
  propsDescription,
  componentText,
};

export default skeletonProps;
