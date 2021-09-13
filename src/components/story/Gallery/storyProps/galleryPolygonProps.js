const subTitle = "Gallery polygon";
const importType = `import Gallery from "kromac/lib/Gallery";`;

const notes = `the numbers of the <b>columns</b> by default is <div class="chip">3</div> 
when the screen is <b>lg</b> or <b>md</b> by bootstrap. <br />
And when the screen is <b>sm</b> or <b>lower</b> the numbers of the columns is <div class="chip">1</div>.
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
    "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg"
  ],
  galleryType: "polygon"
};

const componentText = `<div>
  <Gallery
    galleryType="polygon"
    images={[
      "image.png",
      "image.png",
      "image.png",
      "image.png",
      "image.png",
      "image.png",
      "image.png",
      "image.png"
    ]}
  />
</div>`;

const propsDescription = [
  {
    name: "gallery",
    type: "string",
    values: ["polygon", "default responsive", "responsive"],
    description: "Gallery type"
  },
  {
    name: "images",
    type: "Array Required",
    values: [`imgUrl`],
    description: "gallery image list"
  },
  {
    name: "imageFitPosition",
    type: "string",
    values: ["default center"],
    description: "Image position"
  },
  {
    name: "polygonType",
    type: "string",
    values: ["default rhombus", "hexagon", "rabbet"],
    description: "Polygon shape"
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
