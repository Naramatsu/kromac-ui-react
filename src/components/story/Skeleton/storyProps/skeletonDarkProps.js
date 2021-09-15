const subTitle = "Skeleton dark";
const importType = `import Skeleton from "kromac/lib/Panel";`;

const skeletonProp = { className: "dark", width: "250px" };

const componentText = `<div>
  <Skeleton 
    className="dark"
    width="250px"
  />
</div>`;

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
