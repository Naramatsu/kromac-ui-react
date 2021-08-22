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
  image: "https://images3.alphacoders.com/112/1121877.jpg",
  name: "Card name",
  profession: "Card profession",
  redes: [
    { name: "facebook", url: "#" },
    { name: "instagram", url: "#" },
    { name: "linkedin", url: "#" },
    { name: "twitter", url: "#" }
  ],
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

const componentText = `<div>
  <Row>
    <Col xl={3} lg={4} md={6} sm={12}>
      <Card
        cardType="user"
        name="Card name"
        profession: "Card profession"
        image="image.png"
        redes={[
          { name: "facebook", url: "#" },
          { name: "instagram", url: "#" },
          { name: "linkedin", url: "#" },
          { name: "twitter", url: "#" }
        ]}
      />
    </Col>
  </Row>
</div>`;

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
