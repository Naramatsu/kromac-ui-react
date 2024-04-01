const subTitle = "Card Polygon";

const cardProps = {
  cardType: "polygon",
  image: "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
  name: "Card Title",
  color: "red",
  shape: "hexagon",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">cardType</span>=
      <span className="string">"polygon"</span>
      <br />
      <span className="component tab">image</span>=
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab">name</span>=
      <span className="string">"Card title"</span>
      <br />
      <span className="component tab">color</span>=
      <span className="string">"red"</span>
      <br />
      <span className="component tab">shape</span>=
      <span className="string">"hexagon"</span>
      <br />
      <span className="react">&gt;</span>
      <br />
      <span className="var tab">&lt;p&gt;</span>
      <span className="text">Card text here...!</span>
      <span className="var">&lt;/p&gt;</span>
      <br />
      <span className="react">&lt;/Card&gt;</span>
      <br />
    </p>
  </div>
);

const propsDescription = [
  {
    name: "cardType",
    type: "string",
    values: [
      "polygon",
      "default classic",
      "image",
      "horizontal",
      "reveal",
      "info",
      "team",
      "percentage",
      "classic",
    ],
    description: "Card type.",
  },
  {
    name: "image",
    type: "string",
    values: [],
    description: "Card image url.",
  },
  {
    name: "video",
    type: "object",
    values: [
      "url string required",
      "controls boolean",
      "autoPlay boolean",
      "muted boolean",
      "loop boolean",
    ],
    description: "Card object in order to setup the video.",
  },
  {
    name: "name",
    type: "string Required",
    values: [],
    description: "Text that will be displayed as the person name.",
  },
  {
    name: "shape",
    type: "string",
    values: [
      `default hexagon`,
      "hexagon",
      "rhombus",
      "pentagon",
      "heptagon",
      "octagon",
      "bevel",
      "circle",
    ],
    description: "Sets Card's polygon shape.",
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`],
    description: "Sets background color.",
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Sets image position to be displayed in the card.",
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Card content, you can write html code inside.",
  },
];

const cardClassicProps = {
  cardProps,
  componentText,
  propsDescription,
  subTitle,
};

export default cardClassicProps;
