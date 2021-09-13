const subTitle = "Banner image";
const importType = `import Banner from "kromac/lib/Banner";`;

const bannerProps = {
  bannerType: "image",
  image: "https://cdn.pixabay.com/photo/2018/07/05/22/16/panorama-3519309_1280.jpg",
  height: "300px",
};

const componentText = `<div>
  <Banner
    bannerType="image"
    image="image.png"
    height="300px"
  >
    <h1>Title Here</h1>
    <p>Some text here</p>
  </Banner>
</div>`;

const propsDescription = [
  {
    name: "bannerType",
    type: "string",
    values: ["image", "default classic", "text", "classic"],
    description: "Banner type"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "banner image"
  },
  {
    name: "color",
    type: "string",
    values: ["default #fff"],
    description: "font color"
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "banner height"
  },
  {
    name: "attachment",
    type: "string",
    values: ["default fixed"],
    description: "background attachment"
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
  componentText
};

export default bannersProps;
