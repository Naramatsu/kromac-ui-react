const subTitle = "Banner classic";
const importType = `import Banner from "kromac/lib/Banner";`;
const notes = `
  <p>
    for a better expirience, the image must be png and transparent background like the example.
  </p>
  <h6>Recomendations:</h6>
  if you use an rectangular (horizontally) and you wanna use the prop 
  <div class="chip">overlay</div> 
  also use the prop <div class="chip">isBottom</div> to align the imagen at bottom side of ther banner.
 
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
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Banner</span>
      <br />
      <span className="component tab2">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab2">
        height
      </span>=<span className="string">"300px"</span>
      <br />
      <span className="component tab2">overlay</span>
      <br />
      <span className="react tab">&gt;</span>
      <br />
      <span className="var tab2">&lt;h1 </span>
      <span className="component">
        className
      </span>=<span className="string">"text-bg-light"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab3">Title Here</span>
      <br />
      <span className="var tab2">&lt;/h1&gt;</span>
      <br />
      <span className="var tab2">&lt;p </span>
      <span className="component">
        className
      </span>=<span className="string">"text-bg-light"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab3">Some text here</span>
      <br />
      <span className="var tab2">&lt;/p&gt;</span>
      <br />
      <span className="react tab">&lt;/Banner&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "bannerType",
    type: "string",
    values: ["default classic", "classic", "image", "text"],
    description: "Banner type"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "banner image"
  },
  {
    name: "background",
    type: "string",
    values: ["default #000"],
    description: "background color of the banner"
  },
  {
    name: "color",
    type: "string",
    values: [],
    description: "font color"
  },
  {
    name: "height",
    type: "string",
    values: ["default auto"],
    description: "banner height"
  },
  {
    name: "order",
    type: "string",
    values: ["default right"],
    description: "side to appear the image"
  },
  {
    name: "overlay",
    type: "bool",
    values: ["default false"],
    description: "this prop make the image overlay the banner height"
  },
  {
    name: "isBottom",
    type: "bool",
    values: ["default false"],
    description:
      "this prop align the image to bottom side, but just work with overlay prop as true"
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "text align"
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "text you want to appear as banner text"
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
