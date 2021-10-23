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
      "user",
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
    description: "Card image link."
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Card title that appears on this one."
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Prop to fit the image into the card."
  }
];

const cardClassicProps = {
  subTitle,
  importType,
  cardProps,
  propsDescription,
  componentText
};

export default cardClassicProps;
