const subTitle = "Card Image";
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
  cardType: "image",
  image: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
  title: "Card Title"
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
      </span>=<span className="string">"image"</span>
      <br />
      <span className="component tab4">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab4">
        title
      </span>=<span className="string">"Card title"</span>
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
    description: "Card type"
  },
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "Card image"
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Card title appear into the card"
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
