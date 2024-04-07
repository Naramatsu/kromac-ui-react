const subTitle = "Banner image";
const storyLink = "/?path=/docs/kromac-ui-banner-image--docs";
const notes = `
  <p>
    For a better experience use only text tags as children.
  </p>
`;

const bannerProps = {
  bannerType: "image",
  image:
    "https://cdn.pixabay.com/photo/2018/07/05/22/16/panorama-3519309_1280.jpg",
  height: "300px",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Banner</span>
      <br />
      <span className="component tab">bannerType</span>=
      <span className="string">"image"</span>
      <br />
      <span className="component tab">image</span>=
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab">height</span>=
      <span className="string">"300px"</span>
      <br />
      <span className="react">&gt;</span>
      <br />
      <span className="var tab">&lt;h1 </span>
      <span className="component">className</span>=
      <span className="string">"text-bg-light"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab2">Title Here</span>
      <br />
      <span className="var tab">&lt;/h1&gt;</span>
      <br />
      <span className="var tab">&lt;p </span>
      <span className="component">className</span>=
      <span className="string">"text-bg-light"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab2">Some text here</span>
      <br />
      <span className="var tab">&lt;/p&gt;</span>
      <br />
      <span className="react">&lt;/Banner&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "bannerType",
    type: "string",
    values: ["image", "default classic", "text", "classic"],
    description: "Banner type.",
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Image url.",
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "Side where you want to align the text.",
  },
  {
    name: "color",
    type: "string",
    values: ["default #fff"],
    description: "Sets font color.",
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "Set height of component.",
  },
  {
    name: "attachment",
    type: "string",
    values: ["default fixed"],
    description: "Sets background attachment.",
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Display any element you want to appear in the banner.",
  },
];

const bannersProps = {
  bannerProps,
  componentText,
  notes,
  propsDescription,
  subTitle,
  storyLink,
};

export default bannersProps;
