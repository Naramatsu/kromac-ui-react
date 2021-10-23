const subTitle = "Banner text";
const importType = `import Banner from "kromac-ui/dist/Banner";`;

const notes = `
  When the screen is <div class="chip">767px</div> or lower the title will centered and move to top.
  <br />
  Do not set the <div class="chip">bgTextColor</div> as <div class="chip">#000</div> or 
  <div class="chip">"black"</div> because it provocate that the text becomes invisible.
  <br />
  <br />
  <h5>Recomendations:</h5>
  <p>
    For a better experience do not set long text as title.
  </p>    
`;

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
      <span className="react">&lt;Banner</span>
      <br />
      <span className="component tab">
        bannerType
      </span>=<span className="string">"text"</span>
      <br />
      <span className="component tab">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab">
        title
      </span>=<span className="string">"Some title here"</span>
      <br />
      <span className="component tab">
        height
      </span>=<span className="string">"500px"</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "bannerType",
    type: "string",
    values: ["text", "default classic", "image", "classic"],
    description: "Banner type."
  },
  {
    name: "title",
    type: "string Required",
    values: [],
    description: "Text that will appear as a title"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Banner image link."
  },
  {
    name: "bgTextColor",
    type: "string",
    values: [],
    description: `Text background color (please do not put #000 or "black").`
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "Banner height."
  },
  {
    name: "order",
    type: "string",
    values: ["default left"],
    description: "Side on which the title will appears on the banner."
  },
  {
    name: "attachment",
    type: "string",
    values: [],
    description: "This props set the background attachment."
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description:
      "Side you want to align the text in its order. (this do not affect the <order> prop)."
  },
  {
    name: "bgPosition",
    type: "string",
    values: ["default center"],
    description: "Background image align."
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
