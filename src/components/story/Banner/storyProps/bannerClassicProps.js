const subTitle = "Banner classic";

const notes = `
  <p>For a better experience:</p>
  <ul>
    <li>* The image should be png with a transparent background as shown in the example.</li>
    <li>* Use only text tags as children.</li>
  </ul>
  <br />
  <h5>Recomendations:</h5>
  If you are going to use a rectangular image (horizontally) and you want to use the prop 
  <div class="chip">overlay</div> 
  also use the prop <div class="chip">isBottom</div> to align the image at bottom of the banner.
`;

const bannerProps = {
  image:
    "https://cdn.pixabay.com/photo/2018/04/22/23/18/skeleton-3342754_1280.png",
  height: "300px",
  overlay: true,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Banner</span>
      <br />
      <span className="component tab">image</span>=
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab">height</span>=
      <span className="string">"300px"</span>
      <br />
      <span className="component tab">overlay</span>
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
    values: ["default classic", "classic", "image", "text"],
    description: "Banner type.",
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Image url.",
  },
  {
    name: "background",
    type: "string",
    values: ["default #000"],
    description: "Sets background color.",
  },
  {
    name: "color",
    type: "string",
    values: [],
    description: "Sets font color.",
  },
  {
    name: "height",
    type: "string",
    values: ["default auto"],
    description: "Set height of component.",
  },
  {
    name: "order",
    type: "string",
    values: ["default right", "left"],
    description: "Side where the image will be displayed.",
  },
  {
    name: "overlay",
    type: "bool",
    values: ["default false"],
    description: "Display image with an overlay effect on the banner.",
  },
  {
    name: "isBottom",
    type: "bool",
    values: ["default false"],
    description:
      "This prop will align the image to the bottom side, but will only work with <overlay> prop turned on.",
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "Text align options. (this do not affect the <order> prop).",
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
};

export default bannersProps;
