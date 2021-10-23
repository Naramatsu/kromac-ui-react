const subTitle = "Card Percentage";
const importType = `import Card from "kromac-ui/dist/Card";`;

const cardProps = {
  cardType: "percentage",
  title: "Card Title",
  cardColor: "red",
  progressColor: "#01E735",
  progress: 85
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">
        cardType
      </span>=<span className="string">"percentage"</span>
      <br />
      <span className="component tab">
        title
      </span>=<span className="string">"Card title"</span>
      <br />
      <span className="component tab">
        cardColor
      </span>=<span className="string">"red"</span>
      <br />
      <span className="component tab">
        progressColor
      </span>=<span className="string">"#01E735"</span>
      <br />
      <span className="component tab">progress</span>=<span>{`{`}</span>
      <span className="text">85</span>
      <span>{`}`}</span>
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
      "percentage",
      "default classic",
      "image",
      "horizontal",
      "reveal",
      "info",
      "user",
      "polygon",
      "classic"
    ],
    description: "Card type."
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Card title that appears on this one."
  },
  {
    name: "progress",
    type: "number Required",
    values: [],
    description: "Progress in percentage."
  },
  {
    name: "cardColor",
    type: "string",
    values: [`default transparent`],
    description:
      "Background color of the Card content. You can add any color in hex format or name."
  },
  {
    name: "progressColor",
    type: "string",
    values: [`default #D53DC4`],
    description:
      "Color of the progress. You can add any color in hex format or name."
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
