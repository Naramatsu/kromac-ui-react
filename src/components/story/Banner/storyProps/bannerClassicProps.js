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
  image: "https://images.alphacoders.com/473/473210.png",
  height: "300px",
  overlay: true
};

const componentText = `<div>
  <Banner
    image="image.png"
    height="300px"
    overlay
  >
    <h1 className="text-bg-light">
      Title Here
    </h1>
    <p className="text-bg-light">
      Some text here
    </p>
  </Banner>
</div>`;

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
    values: [],
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
