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
    description: "String array of images url."
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "Sets heightof the component."
  },
  {
    name: "showPreview",
    type: "bool",
    values: [`default false`],
    description:
      "When this prop is turned on, it will display a small preview below of each images."
  },
  {
    name: "autoPlay",
    type: "bool",
    values: [`default false`],
    description:
      "When this prop is turned on, it makes the slider plays automatically."
  },
  {
    name: "timer",
    type: "number",
    values: [`default 5`],
    description:
      "Sets the timeout slides in seconds. (This only works when the <AutoPlay> prop is turned on)."
  }
];

const sliderProps = {
  componentText,
  importType,
  notes,
  propsDescription,
  sliderProp,
  subTitle
};

export default sliderProps;
