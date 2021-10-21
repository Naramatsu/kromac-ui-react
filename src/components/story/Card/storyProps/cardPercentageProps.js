const subTitle = "Card Percentage";
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
  cardType: "percentage",
  title: "Card Title",
  cardColor: "red",
  progressColor: "#01E735",
  progress: 85
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
      </span>=<span className="string">"percentage"</span>
      <br />
      <span className="component tab4">
        title
      </span>=<span className="string">"Card title"</span>
      <br />
      <span className="component tab4">
        cardColor
      </span>=<span className="string">"red"</span>
      <br />
      <span className="component tab4">
        progressColor
      </span>=<span className="string">"#01E735"</span>
      <br />
      <span className="component tab4">progress</span>=<span>{`{`}</span>
      <span className="text">85</span>
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
    description: "Card type"
  },
  {
    name: "title",
    type: "string",
    values: [],
    description: "Card title appear into the card"
  },
  {
    name: "progress",
    type: "number Required",
    values: [],
    description: "progress"
  },
  {
    name: "cardColor",
    type: "string",
    values: [`default #transparent`],
    description: "Card color, you can add any color en hex format or name"
  },
  {
    name: "progressColor",
    type: "string",
    values: [`default #D53DC4`],
    description: "you can add any color en hex format or name"
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
