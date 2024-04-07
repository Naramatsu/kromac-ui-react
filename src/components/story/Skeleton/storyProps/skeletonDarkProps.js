const subTitle = "Skeleton dark";
const storyLink = "/?path=/story/kromac-ui-skeleton--dark";

const skeletonProp = { className: "dark", width: "250px" };

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Skeleton </span>
      <br />
      <span className="var tab">className</span>=
      <span className="string">"dark"</span>
      <br />
      <span className="var tab">width</span>=
      <span className="string">"250px"</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "height",
    type: "string",
    values: ["default 32px"],
    description: "Sets height.",
  },
  {
    name: "width",
    type: "string",
    values: [`default 100%`],
    description: "Sets width.",
  },
  {
    name: "borderRadius",
    type: "string",
    values: [`default none`],
    description: "Sets border radius.",
  },
  {
    name: "className",
    type: "string",
    values: ["dark", " default light", "dark"],
    description: "Sets Skeleton theme.",
  },
];

const skeletonProps = {
  componentText,
  propsDescription,
  skeletonProp,
  subTitle,
  storyLink,
};

export default skeletonProps;
