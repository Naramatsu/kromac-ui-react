const subTitle = "Card Team";
const importType = `import Card from "kromac-ui/dist/Card";`;
const notes = `
  The <div class="chip">redes</div> prop value format must be equals as that shown in the implementation.
`;

const cardProps = {
  cardType: "team",
  image: "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
  name: "Card name",
  profession: "Card profession",
  redes: [
    { name: "facebook", url: "#" },
    { name: "instagram", url: "#" },
    { name: "linkedin", url: "#" },
    { name: "twitter", url: "#" }
  ],
  color: "#154360"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Card</span>
      <br />
      <span className="component tab">
        cardType
      </span>=<span className="string">"team"</span>
      <br />
      <span className="component tab">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab">name</span>=<span className="string">"Card name"</span>
      <br />
      <span className="component tab">
        profession
      </span>=<span className="string">"Card profession"</span>
      <br />
      <span className="component tab">
        color
      </span>=<span className="string">"#154360"</span>
      <br />
      <span className="component tab">redes</span>=<span>{`{`}</span>
      <span className="import">[</span>
      <br />
      <span className="tab2">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"facebook"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="tab2">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"instagram"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="tab2">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"linkedin"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="tab2">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"twitter"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="import tab">]</span>
      <span>{`}`}</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "cardType",
    type: "string",
    values: [
      "team",
      "default classic",
      "image",
      "horizontal",
      "reveal",
      "info",
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
    name: "name",
    type: "string Required",
    values: [],
    description: "Text that will be displayed as the person's name."
  },
  {
    name: "profession",
    type: "string",
    values: [],
    description: "Text that will be displayed as the person's profession."
  },
  {
    name: "shape",
    type: "string",
    values: [`default info`, "summary", "info"],
    description: "Sets Card shape."
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`],
    description: "Sets background color."
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Sets image position to be displayed in the card."
  },
  {
    name: "redes",
    type: "array of object",
    values: [
      "facebook",
      "instagram",
      "linkedin",
      "twitter",
      "twitch",
      "youtube"
    ],
    description: `Object array of social networks names and urls.`
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
    description:
      'Card content, you can write html code inside. (this one will only works when the <shape> prop is "summary")'
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
