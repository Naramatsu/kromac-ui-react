const subTitle = "Card User";
const importType = `import Card from "kromac-ui/dist/Card";`;
const notes = `
  The <div class="chip">redes</div> prop value format must be equals as that shown in the implementation.
`;

const cardProps = {
  cardType: "user",
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
      </span>=<span className="string">"user"</span>
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
      "user",
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
    type: "string Required",
    values: [],
    description: "Card image link."
  },
  {
    name: "name",
    type: "string Required",
    values: [],
    description: "Name that appears on this one."
  },
  {
    name: "profession",
    type: "string",
    values: [],
    description: "Profession that appears on this one."
  },
  {
    name: "shape",
    type: "string",
    values: [`default info`, "summary", "info"],
    description: "Card shape."
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`],
    description:
      "Background color of the Card content. You can add any color in hex format or name."
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Prop to fit the image into the card."
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
    description: `Object array of social networks.`
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: `Card content, you can write html code inside. (this only works when the <shape> prop is "summary")`
  }
];

const cardClassicProps = {
  subTitle,
  importType,
  cardProps,
  notes,
  propsDescription,
  componentText
};

export default cardClassicProps;
