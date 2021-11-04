const subTitle = "Card Image";
const importType = `import Card from "kromac-ui/dist/Card";`;

const cardProps = {
  cardType: "image",
  image: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
  title: "Card Title"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">
        cardType
      </span>=<span className="string">"image"</span>
      <br />
      <span className="component tab">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab">
        title
      </span>=<span className="string">"Card title"</span>
      <br />
      <span className="react">/&gt;</span>
      <br />
    </p>
  </div>
);

const propsDescription = [
  {
    name: "cardType",
    type: "string",
    values: [
      "image",
      "default classic",
      "horizontal",
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
    type: "string Required",
    values: [],
    description: "Card image url."
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Text that will be displayed as the Card's title."
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Sets image position to be displayed in the card."
  }
];

const cardClassicProps = {
  cardProps,
  componentText,
  importType,
  propsDescription,
  subTitle
};

export default cardClassicProps;
