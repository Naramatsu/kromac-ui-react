const subTitle = "Banner classic";
const importType = `import Banner from "kromac-ui/dist/Banner";`;
const notes = `
  <p>
    For a better experience, the image must be png and transparent background like the example.
  </p>
  <br />
  <h5>Recomendations:</h5>
  If you  will use a rectangular image (horizontally) and you wanna use the prop 
  <div class="chip">overlay</div> 
  also use the prop <div class="chip">isBottom</div> to align the image at bottom of the banner.
  <br />
  <p>
    For a better experience use only text tags as children.
  </p>
`;

const bannerProps = {
  image:
    "https://cdn.pixabay.com/photo/2018/04/22/23/18/skeleton-3342754_1280.png",
  height: "300px",
  overlay: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Banner</span>
      <br />
      <span className="component tab">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab">
        height
      </span>=<span className="string">"300px"</span>
      <br />
      <span className="component tab">overlay</span>
      <br />
      <span className="react">&gt;</span>
      <br />
      <span className="var tab">&lt;h1 </span>
      <span className="component">
        className
      </span>=<span className="string">"text-bg-light"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab2">Title Here</span>
      <br />
      <span className="var tab">&lt;/h1&gt;</span>
      <br />
      <span className="var tab">&lt;p </span>
      <span className="component">
        className
      </span>=<span className="string">"text-bg-light"</span>
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
    values: ["default classic", "classic", "image", "text"],
    description: "Banner type."
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Banner image link."
  },
  {
    name: "background",
    type: "string",
    values: ["default #000"],
    description: "Background color of the banner."
  },
  {
    name: "color",
    type: "string",
    values: [],
    description: "Font color."
  },
  {
    name: "height",
    type: "string",
    values: ["default auto"],
    description: "Banner height."
  },
  {
    name: "order",
    type: "string",
    values: ["default right"],
    description: "Side on which the image will appears on the banner."
  },
  {
    name: "overlay",
    type: "bool",
    values: ["default false"],
    description: "This prop will make the image overlay the banner height"
  },
  {
    name: "isBottom",
    type: "bool",
    values: ["default false"],
    description:
      "This prop will align the image to bottom side, but only work with <overlay> prop turned on."
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description:
      "Side you want to align the text in its order. (this do not affect the <order> prop)."
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Any content you want to appear on the banner."
  }
];

const bannersProps = {
  subTitle,
  importType,
  bannerProps,
  propsDescription,
  componentText,
  notes
};

export default bannersProps;
