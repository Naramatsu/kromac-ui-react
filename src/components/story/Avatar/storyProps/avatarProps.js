const subTitle = "";
const importType = `import Avatar from "kromac/lib/Avatar";`;

const avatarProp = {
  image:
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
  name: "Your name here"
};

const componentText = `<div>
  <Avatar
    image="image.png"
    name="Your name here"
  />
</div>`;

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
