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

const componentText = `<div>
  <Row>
    <Col xl={3} lg={4} md={6} sm={12}>
      <Card
        cardType="percentage"
        title="Card title"
        cardColor="red"
        progressColor="#01E735"
        progress={85}
      />
    </Col>
  </Row>
</div>`;

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
  },
  {
    name: "border",
    type: "bool",
    values: [`default false`],
    description: "Prop to add a border"
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
