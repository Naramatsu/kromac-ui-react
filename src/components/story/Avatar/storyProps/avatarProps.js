const subTitle = "";
const importType = `import Avatar from "kromac/lib/Avatar";`;

const avatarProp = {
  image:
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
  name: "Your name here"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Avatar</span>
      <br />
      <span className="component tab2">image</span>
      =
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab2">name</span>
      =
      <span className="string">"Your name here"</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "image",
    type: "string Required",
    values: [],
    description: "image link"
  },
  {
    name: "name",
    type: "string",
    values: [],
    description:
      "Add a name for this avatar, but if you do not want, no problem, it not appear"
  },
  {
    name: "size",
    type: "string",
    values: ["default 150px"],
    description: "size (width, height) of the circle"
  },
  {
    name: "borderColor",
    type: "string",
    values: [`default #000`],
    description: "set the border color of the component"
  },
  {
    name: "bgColor",
    type: "string",
    values: [`default linear-gradient`],
    description: "set the background color of the component"
  },
  {
    name: "isStatic",
    type: "bool",
    values: [`default false`],
    description: "if you do not want the hover effect, turn on this prop"
  },
  {
    name: "imageFit",
    type: "bool",
    values: [`default false`],
    description: "if you want the image cover all the circle, turn on this prop"
  },
  {
    name: "imagePosition",
    type: "string",
    values: [`default top`],
    description:
      "with this prop you can adjust the image position, this one only work with `imageFit` turned on"
  },
  {
    name: "tooltip",
    type: "string",
    values: [],
    description: "tooltip"
  }
];

const sliderProps = {
  subTitle,
  importType,
  avatarProp,
  propsDescription,
  componentText
};

export default sliderProps;
