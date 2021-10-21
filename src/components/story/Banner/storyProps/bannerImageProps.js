const subTitle = "Banner image";
const importType = `import Banner from "kromac/lib/Banner";`;

const bannerProps = {
  bannerType: "image",
  image:
    "https://cdn.pixabay.com/photo/2018/07/05/22/16/panorama-3519309_1280.jpg",
  height: "300px"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Banner</span>
      <br />
      <span className="component tab2">
        bannerType
      </span>=<span className="string">"image"</span>
      <br />
      <span className="component tab2">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab2">
        height
      </span>=<span className="string">"300px"</span>
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
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "text align"
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
