const subTitle = "Skeleton light";
const importType = `import Skeleton from "kromac/lib/Panel";`;

const skeletonProp = {};

const componentText = `<div>
  <Skeleton />
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
