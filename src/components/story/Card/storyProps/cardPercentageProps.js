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
      "team",
      "polygon",
      "classic"
    ],
    description: "Card type."
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Text that will be displayed as the Card's title."
  },
  {
    name: "progress",
    type: "number Required",
    values: [],
    description: "Displays progress as a percentage."
  },
  {
    name: "cardColor",
    type: "string",
    values: [`default transparent`],
    description: "Sets background color."
  },
  {
    name: "progressColor",
    type: "string",
    values: [`default #D53DC4`],
    description: "Sets progress color."
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
