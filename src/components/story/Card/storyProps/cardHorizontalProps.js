const subTitle = "Card Horizontal";
const description = "this component always must be wrappe by an Row Col";
const importType = `import Card from "kromac/lib/Card";`;
const notes = `For better view please wrap the card into a bootstrap 
                <div class="chip">Row</div> 
                <div class="chip">Col</div>
                and use
                <div class="chip">lg=6</div>
                <div class="chip">md=12</div>
                <div class="chip">xs=12</div>`;

const cardProps = {
  cardType: "horizontal",
  image: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
  title: "Card Title",
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
      <span className="component">lg</span>=<span>{`{`}</span>
      <span className="text">6</span>
      <span>{`} `}</span>
      <span className="component">md</span>=<span>{`{`}</span>
      <span className="text">12</span>
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
      </span>=<span className="string">"horizontal"</span>
      <br />
      <span className="component tab4">
        image
      </span>=<span className="string">"image.png"</span>
      <br />
      <span className="component tab4">
        title
      </span>=<span className="string">"Card title"</span>
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
      "horizontal",
      "default classic",
      "image",
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
    name: "color",
    type: "string",
    values: [`default #fff`, "transparent", "#fff"],
    description: "Card caption color"
  },
  {
    name: "imageSide",
    type: "string",
    values: [`default left`, "right", "left"],
    description: "side of the image"
  },
  {
    name: "reveal",
    type: "bool",
    values: [`default false`],
    description: "Prop to expand the card to show all the text"
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
