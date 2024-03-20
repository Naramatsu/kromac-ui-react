const subTitle = "Card Info";

const cardProps = {
  cardType: "info",
  size: "lg",
  title: "Card Title",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
  color: "red",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">cardType</span>=
      <span className="string">"info"</span>
      <br />
      <span className="component tab">title</span>=
      <span className="string">"Card title"</span>
      <br />
      <span className="component tab">color</span>=
      <span className="string">"red"</span>
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
      "info",
      "default classic",
      "image",
      "horizontal",
      "reveal",
      "team",
      "polygon",
      "percentage",
      "classic",
    ],
    description: "Card type.",
  },
  {
    name: "title",
    type: "string Required",
    values: [],
    description: "Text that will be displayed as the Card's title.",
  },
  {
    name: "size",
    type: "string",
    values: [`default md`, "sm", "md", "lg"],
    description: "Card content size.",
  },
  {
    name: "shape",
    type: "string",
    values: [`default color`, "transparent", "color"],
    description: "Sets shape of the card.",
  },
  {
    name: "color",
    type: "string",
    values: [`default transparent`],
    description: "Sets background color.",
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
