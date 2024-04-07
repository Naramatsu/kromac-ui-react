const subTitle = "Banner text";
const storyLink = "/?path=/docs/kromac-ui-banner-text--docs";

const notes = `
  <p>
    For a better experience do not set a long text as title.
  </p>  
  When the screen viewport is <div class="chip">767px</div> or lower the title will be centered and moved to the top.
  <br />
  Do not set the <div class="chip">bgTextColor</div> as <div class="chip">#000</div> or 
  <div class="chip">"black"</div> because it will make the text invisible.
`;

const bannerProps = {
  bannerType: "text",
  image:
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  height: "500px",
  title: "Some title here",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Banner</span>
      <br />
      <span className="component tab">bannerType</span>=
      <span className="string">"text"</span>
      <br />
      <span className="component tab">image</span>=
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab">title</span>=
      <span className="string">"Some title here"</span>
      <br />
      <span className="component tab">height</span>=
      <span className="string">"500px"</span>
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
    description: "Banner type.",
  },
  {
    name: "title",
    type: "string Required",
    values: [],
    description: "Text that will appear as a title",
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Image url.",
  },
  {
    name: "bgTextColor",
    type: "string",
    values: [],
    description: `Text background color (please do not put #000 or "black").`,
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "Set height of component.",
  },
  {
    name: "order",
    type: "string",
    values: ["default left"],
    description: "Side where the title will be displayed.",
  },
  {
    name: "attachment",
    type: "string",
    values: [],
    description: "Sets background attachment.",
  },
  {
    name: "textAlign",
    type: "string",
    values: ["default center"],
    description: "Text align options. (this do not affect the <order> prop).",
  },
  {
    name: "bgPosition",
    type: "string",
    values: ["default center"],
    description: "Sets image position to be displayed in the background.",
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
