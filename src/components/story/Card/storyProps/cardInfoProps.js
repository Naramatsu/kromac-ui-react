const subTitle = "Card Info";
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
  cardType: "info",
  size: "lg",
  title: "Card Title",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.`,
  color: "red"
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
      </span>=<span className="string">"info"</span>
      <br />
      <span className="component tab4">
        title
      </span>=<span className="string">"Card title"</span>
      <br />
      <span className="component tab4">
        color
      </span>=<span className="string">"red"</span>
      <br />
      <span className="react tab3">&gt;</span>
      <br />
      <span className="var tab4">&lt;p&gt;</span>
      <span className="text">Card text here...!</span>
      <span className="var">&lt;/p&gt;</span>
      <br />
      <span className="react tab3">&lt;/Card&gt;</span>
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
      "info",
      "default classic",
      "image",
      "horizontal",
      "reveal",
      "user",
      "polygon",
      "percentage",
      "classic"
    ],
    description: "Card type"
  },
  {
    name: "title",
    type: "string Required",
    values: [],
    description: "Card title appear into the card"
  },
  {
    name: "size",
    type: "string",
    values: [`default md`, "sm", "md", "lg"],
    description: "Card size"
  },
  {
    name: "shape",
    type: "string",
    values: [`default color`, "transparent", "color"],
    description: "Card caption color"
  },
  {
    name: "color",
    type: "string",
    values: [`default transparent`],
    description:
      "Card caption color, you can add any color en hex format or name"
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
