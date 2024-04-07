const subTitle = "Card Reveal";
const storyLink = "/?path=/docs/kromac-ui-card-reveal--docs";

const cardProps = {
  cardType: "reveal",
  image: "https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg",
  title: "Card Title",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.`,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">cardType</span>=
      <span className="string">"reveal"</span>
      <br />
      <span className="component tab">image</span>=
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab">title</span>=
      <span className="string">"Card title"</span>
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
      "reveal",
      "default classic",
      "image",
      "horizontal",
      "info",
      "team",
      "polygon",
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
    name: "title",
    type: "string",
    values: [],
    description: "Text that will be displayed as the Card's title.",
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`, "transparent", "#fff"],
    description: "Sets background color.",
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Sets image position to be displayed in the card.",
  },
  {
    name: "transition",
    type: "string",
    values: [`default .5s`],
    description: "Transition time.",
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
  storyLink,
};

export default cardClassicProps;
