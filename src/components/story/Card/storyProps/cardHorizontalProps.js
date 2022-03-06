const subTitle = "Card Horizontal";
const importType = `import Card from "kromac-ui/dist/Card";`;
const notes = `
<p>
This card occupies 100% of the width wrapper.
</p>
`;

const cardProps = {
  cardType: "horizontal",
  image: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
  title: "Card Title",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.`
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">
        cardType
      </span>=<span className="string">"horizontal"</span>
      <br />
      <span className="component tab">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab">
        title
      </span>=<span className="string">"Card title"</span>
      <br />
      <span className="react">&gt;</span>
      <br />
      <span className="var tab">&lt;p&gt;</span>
      <span className="text">Card text here...!</span>
      <span className="var">&lt;/p&gt;</span>
      <br />
      <span className="react">&lt;/Card&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "cardType",
    type: "string",
    values: [
      "horizontal",
      "default classic",
      "image",
      "reveal",
      "info",
      "team",
      "polygon",
      "percentage",
      "classic"
    ],
    description: "Card type."
  },
  {
    name: "image",
    type: "string",
    values: [],
    description: "Card image url."
  },
  {
    name: "video",
    type: "object",
    values: [
      "url string required",
      "controls boolean",
      "autoPlay boolean",
      "muted boolean",
      "loop boolean"
    ],
    description: "Card object in order to setup the video."
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Text that will be displayed as the Card's title."
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`, "transparent", "#fff"],
    description: "Sets background color."
  },
  {
    name: "imageSide",
    type: "string",
    values: [`default left`, "right", "left"],
    description: "Side where the image will be display in the Card."
  },
  {
    name: "reveal",
    type: "bool",
    values: [`default false`],
    description: 'Adds the "show more" to reveal the card content.'
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Sets image position to be displayed in the card."
  },
  {
    name: "transition",
    type: "string",
    values: [`default .5s`],
    description: "Transition time."
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Card content, you can write html code inside."
  }
];

const cardClassicProps = {
  cardProps,
  componentText,
  importType,
  notes,
  propsDescription,
  subTitle
};

export default cardClassicProps;
