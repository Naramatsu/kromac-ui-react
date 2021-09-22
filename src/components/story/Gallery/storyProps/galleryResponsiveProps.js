const subTitle = "Gallery responsive";
const importType = `import Gallery from "kromac/lib/Gallery";`;

const notes = `the numbers of the <b>columns</b> by default is <div class="chip">4</div> 
when the screen is  <b>768px</b> or <b>higher</b>. <br />
When the screen going from <b>768px</b> to <b>551px</b> the numbers of the <b>columns</b> is <div class="chip">2 </div>. <br />
And when the  screen going from <b>550px</b> or <b>lower</b> the numbers of the columns is <div class="chip">1</div>.
`;

const galleryProps = {
  images: [
    {
      img:
        "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",
      row: 2
    },
    {
      img:
        "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      col: 2
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782_1280.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg"
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
      col: 2
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_1280.jpg",
      col: 2
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg"
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
      row: 2
    },
    {
      img:
        "https://images.pexels.com/photos/5821029/pexels-photo-5821029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2020/05/17/20/34/concept-5183469_1280.jpg",
      col: 2
    }
  ]
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Gallery</span>
      <br />
      <span className="component tab2">images</span>=<span>{`{[`}</span>
      <br />
      <span className="tab3">{`{ `}</span>
      <br />
      <span className="var tab4">img: </span>
      <span className="string">"image.png"</span>,<br />
      <span className="var tab4">row: </span>
      <span className="text">2</span>
      <br />
      <span className="tab3">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <br />
      <span className="var tab4">img: </span>
      <span className="string">"image.png"</span>,<br />
      <span className="var tab4">col: </span>
      <span className="text">2</span>
      <br />
      <span className="tab3">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <span className="var">img: </span>
      <span className="string">"image.png"</span>
      <span className="">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <span className="var">img: </span>
      <span className="string">"image.png"</span>
      <span className="">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <br />
      <span className="var tab4">img: </span>
      <span className="string">"image.png"</span>,<br />
      <span className="var tab4">col: </span>
      <span className="text">2</span>
      <br />
      <span className="tab3">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <br />
      <span className="var tab4">img: </span>
      <span className="string">"image.png"</span>,<br />
      <span className="var tab4">col: </span>
      <span className="text">2</span>
      <br />
      <span className="tab3">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <span className="var">img: </span>
      <span className="string">"image.png"</span>
      <span className="">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <br />
      <span className="var tab4">img: </span>
      <span className="string">"image.png"</span>,<br />
      <span className="var tab4">row: </span>
      <span className="text">2</span>
      <br />
      <span className="tab3">{` }`}</span>
      <br />
      <span className="tab3">{`{ `}</span>
      <span className="var">img: </span>
      <span className="string">"image.png"</span>
      <span className="">{` }`}</span>,<br />
      <span className="tab3">{`{ `}</span>
      <br />
      <span className="var tab4">img: </span>
      <span className="string">"image.png"</span>,<br />
      <span className="var tab4">col: </span>
      <span className="text">2</span>
      <br />
      <span className="tab3">{` }`}</span>,<br />
      <span className="tab2">{`]}`}</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "gallery",
    type: "string Required",
    values: ["default responsive", "responsive", "polygon"],
    description: "Gallery type"
  },
  {
    name: "images",
    type: "array Required",
    values: [],
    description: `gallery image list, the array must be similar to {img: "url", row: 2}, {img: "url", col: 2}, {img: "url"}`
  },
  {
    name: "gridGap",
    type: "string",
    values: ["default 0px"],
    description: "space between rows and cols"
  }
];

const gallerysProps = {
  subTitle,
  importType,
  galleryProps,
  propsDescription,
  componentText,
  notes
};

export default gallerysProps;
