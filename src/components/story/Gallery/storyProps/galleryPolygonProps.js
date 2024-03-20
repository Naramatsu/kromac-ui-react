const subTitle = "Gallery polygon";

const description = `This component requires bootstrap.`;
const notes = `
By default the number of <b>columns</b> is <div class="chip">3</div> 
when the viewport is <b>lg</b> or <b>md</b> by bootstrap. <br />
When the viewport is <b>sm</b> or <b>lower</b> the number of the columns becomes <div class="chip">1</div> by bootstrap.
`;

const galleryProps = {
  images: [
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
  ],
  galleryType: "polygon",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="comment">
        {"// install bootstrap => "}
        <a
          href="https://react-bootstrap.github.io/getting-started/introduction"
          target="_blank"
          rel="noreferrer"
        >
          React bootstrap
        </a>
      </span>
      <br />
      <span className="comment">{"// import bootstrap "}</span>
      <br />
      <span className="var"> import </span>
      <span className="string">{`"bootstrap/dist/css/bootstrap.min.css"`}</span>
      <br />
      <span className="comment">{"...your code here."}</span>
      <br />
      <br />
      <span className="react">&lt;Gallery</span>
      <br />
      <span className="component tab">galleryType</span>=
      <span className="string">"polygon"</span>
      <br />
      <span className="component tab">images</span>=<span>{`{[`}</span>
      <br />
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
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "gallery",
    type: "string",
    values: ["polygon", "default responsive", "responsive"],
    description: "Gallery type.",
  },
  {
    name: "images",
    type: "Array Required",
    values: [`imgUrl`],
    description: "String array of images url.",
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: ["default center"],
    description: "Sets image position to be displayed in each polygon.",
  },
  {
    name: "polygonType",
    type: "string",
    values: ["default rhombus", "hexagon", "rabbet"],
    description: "Sets polygon shape.",
  },
];

const gallerysProps = {
  componentText,
  description,
  galleryProps,
  notes,
  propsDescription,
  subTitle,
};

export default gallerysProps;
