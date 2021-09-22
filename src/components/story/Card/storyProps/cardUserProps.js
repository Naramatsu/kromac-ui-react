const subTitle = "Card User";
const description = "this component always must be wrappe by an Row Col";
const importType = `import Card from "kromac/lib/Card";`;
const notes = `For better view please wrap the card into a bootstrap 
                <div class="chip">Row</div> 
                <div class="chip">Col</div>
                and use
                <div class="chip">xl=3</div>
                <div class="chip">lg=4</div>
                <div class="chip">md=6</div>
                <div class="chip">xs=12</div>`;

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
  color: "#154360",
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
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Row&gt;</span>
      <br />
      <span className="react tab2">&lt;Col </span>
      <span className="component">xl</span>=<span>{`{`}</span>
      <span className="text">3</span>
      <span>{`} `}</span>
      <span className="component">lg</span>=<span>{`{`}</span>
      <span className="text">4</span>
      <span>{`} `}</span>
      <span className="component">md</span>=<span>{`{`}</span>
      <span className="text">6</span>
      <span>{`} `}</span>
      <span className="component">sm</span>=<span>{`{`}</span>
      <span className="text">12</span>
      <span>{`}`}</span>
      <span className="react">&gt;</span>
      <br />
      <span className="react tab3">&lt;Card</span>
      <br />
      <span className="component tab4">
        cardType
      </span>=<span className="string">"user"</span>
      <br />
      <span className="component tab4">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab4">
        name
      </span>=<span className="string">"Card name"</span>
      <br />
      <span className="component tab4">
        profession
      </span>=<span className="string">"Card profession"</span>
      <br />
      <span className="component tab4">
        color
      </span>=<span className="string">"#154360"</span>
      <br />
      <span className="component tab4">redes</span>=<span>{`{`}</span>
      <span className="import">[</span>
      <br />
      <span className="tab5">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"facebook"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="tab5">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"instagram"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="tab5">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"linkedin"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="tab5">{`{ `}</span>
      <span className="var">name: </span>
      <span className="string">"twitter"</span>,<span className="var"> url: </span>
      <span className="string">"#"</span>
      <span>{` }`}</span>,<br />
      <span className="import tab4">]</span>
      <span>{`}`}</span>
      <br />
      <span className="react tab3">/&gt;</span>
      <br />
      <span className="react tab2">&lt;/Col&gt;</span>
      <br />
      <span className="react tab">&lt;/Row&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
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
    description: "Card type"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Card image"
  },
  {
    name: "name",
    type: "string Required",
    values: [],
    description: "user name appear into the card"
  },
  {
    name: "profession",
    type: "string",
    values: [],
    description: "user profession"
  },
  {
    name: "shape",
    type: "string",
    values: [`default info`, "summary", "info"],
    description: "Card shape"
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`],
    description: "you can add any color in hex format or name"
  },
  {
    name: "border",
    type: "bool",
    values: [`default false`],
    description: "Prop to add a border"
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: [`default center`, "top", "center", "bottom"],
    description: "Prop to fit the image into the card"
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
    description: `example: [{ name: "facebook", url: "#"}]`
  },
  {
    name: "children",
    type: "any",
    values: [],
    description: "Card content, you can write html code inside"
  }
];

const cardClassicProps = {
  subTitle,
  description,
  importType,
  notes,
  cardProps,
  propsDescription,
  componentText
};

export default cardClassicProps;
