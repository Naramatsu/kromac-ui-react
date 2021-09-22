const subTitle = "Banner text";
const importType = `import Banner from "kromac/lib/Banner";`;

const notes = `when the screen is <div class="chip">767px</div> the title will centered and move to top`;

const bannerProps = {
  bannerType: "text",
  image:
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  height: "500px",
  title: "Some title here"
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
      </span>=<span className="string">"text"</span>
      <br />
      <span className="component tab2">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab2">
        title
      </span>=<span className="string">"Some title here"</span>
      <br />
      <span className="component tab2">
        height
      </span>=<span className="string">"500px"</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "bannerType",
    type: "string",
    values: ["text", "default classic", "image", "classic"],
    description: "Banner type"
  },
  {
    name: "title",
    type: "string Required",
    values: [],
    description: "banner title"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "banner image"
  },
  {
    name: "bgTextColor",
    type: "string",
    values: [],
    description: `background text color (please do not send #000 or "black")`
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "banner height"
  },
  {
    name: "order",
    type: "string",
    values: ["default left"],
    description: "side to appear the title"
  },
  {
    name: "attachment",
    type: "string",
    values: [],
    description: "background attachment"
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "text align"
  },
  {
    name: "bgPosition",
    type: "string",
    values: ["default center"],
    description: "background align"
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
