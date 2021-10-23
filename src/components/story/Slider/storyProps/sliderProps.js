const subTitle = "";
const importType = `import Slider from "kromac-ui/dist/Slider";`;
const notes = `The prop <div class="chip">timer</div> only works if the
<div class="chip">autoPlay</div> prop is turned on.
`;

const sliderProp = {
  images: [
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg"
  ],
  showPreview: true
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Slider</span>
      <br />
      <span className="component tab">images</span>=<span>{`{[`}</span>
      <br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>,<br />
      <span className="string tab2">"image.png"</span>
      <br />
      <span className="tab">{`]}`}</span>
      <br />
      <span className="tab var">showPreview</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "images",
    type: "array Required",
    values: [],
    description: "String array of images link."
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "Height of the slider."
  },
  {
    name: "showPreview",
    type: "bool",
    values: [`default false`],
    description:
      "This prop turned on will show a small preview below of each images."
  },
  {
    name: "autoPlay",
    type: "bool",
    values: [`default false`],
    description: "This prop turned on makes the images slide automatically."
  },
  {
    name: "timer",
    type: "number",
    values: [`default 5`],
    description: "Set the automatically slide time in seconds."
  }
];

const sliderProps = {
  subTitle,
  importType,
  sliderProp,
  propsDescription,
  notes,
  componentText
};

export default sliderProps;
