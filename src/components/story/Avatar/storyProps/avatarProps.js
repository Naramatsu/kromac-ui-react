const subTitle = "";
const importType = `import Avatar from "kromac-ui/dist/Avatar";`;

const avatarProp = {
  image:
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
  name: "Your name here"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Avatar</span>
      <br />
      <span className="component tab">image</span>
      =
      <span className="string">"image.png"</span>
      <br />
      <span className="component tab">name</span>
      =
      <span className="string">"Your name here"</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "image",
    type: "string",
    values: [],
    description: "Image url."
  },
  {
    name: "video",
    type: "object",
    values: [
      "url string required",
      "controls boolean",
      "autoPlay boolean",
      "muted boolean",
      "loop boolean"
    ],
    description: "Card object in order to setup the video."
  },
  {
    name: "name",
    type: "string",
    values: [],
    description:
      "Add a name for this avatar, but if you do not want, no problem, it will not appear."
  },
  {
    name: "size",
    type: "string",
    values: ["default 150px"],
    description: "Size [width, height] of the image circle in px."
  },
  {
    name: "borderColor",
    type: "string",
    values: [`default #000`],
    description: "Set border color of the component."
  },
  {
    name: "bgColor",
    type: "string",
    values: [`default linear-gradient`],
    description: "Set background color of the component."
  },
  {
    name: "isStatic",
    type: "bool",
    values: [`default false`],
    description: "If you don't want to see the hover effect, turn on this prop."
  },
  {
    name: "imageFit",
    type: "bool",
    values: [`default false`],
    description:
      "If you want the image to cover all the circle, turn on this prop."
  },
  {
    name: "imagePosition",
    type: "string",
    values: [`default top`],
    description:
      "With this prop you can adjust the image position, (this one only work with `imagePosition` prop turned on)."
  },
  {
    name: "tooltip",
    type: "string",
    values: [],
    description: "This prop add a tooltip."
  },
  {
    name: "transition",
    type: "string",
    values: [`default .5s`],
    description: "Transition time."
  }
];

const sliderProps = {
  avatarProp,
  componentText,
  importType,
  propsDescription,
  subTitle
};

export default sliderProps;
