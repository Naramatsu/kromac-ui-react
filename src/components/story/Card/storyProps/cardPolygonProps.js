const subTitle = "Card Polygon";
const description = "this component always must be wrappe by an Row Col";
const importType = `import Card from "kromac/lib/Card";`;
const notes = `For better view please wrap the card into a bootstrap 
                <div class="chip">Row</div> 
                <div class="chip">Col</div>
                and use
                <div class="chip">lg=4</div>
                <div class="chip">md=6</div>
                <div class="chip">xs=12</div>`;

const cardProps = {
  cardType: "polygon",
  image: "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
  name: "Card Title",
  color:"red",
  shape: "hexagon",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`
};

const componentText = `<div>
  <Row>
    <Col xl={3} lg={4} md={6} sm={12}>
      <Card
        cardType="polygon"
        image="image.png"
        name="Card title"
        color="red"
        shape="hexagon"
      >
        <p>Card text here...!</p>
      </Card>
    </Col>
  </Row>
</div>`;

const propsDescription = [
  {
    name: "cardType",
    type: "string",
    values: [
      "polygon",
      "default classic",
      "image",
      "horizontal",
      "reveal",
      "info",
      "user",
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
    description: "card name appear into the card"
  },
  {
    name: "shape",
    type: "string",
    values: [
      `default hexagon`,
      "hexagon",
      "rhombus",
      "pentagon",
      "heptagon",
      "octagon",
      "bevel",
      "circle"
    ],
    description: "Card shape"
  },
  {
    name: "color",
    type: "string",
    values: [`default #fff`],
    description: "you can add any color in hex format or name"
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
