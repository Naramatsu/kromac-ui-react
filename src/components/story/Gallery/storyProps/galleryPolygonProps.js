const subTitle = "Gallery polygon";
const importType = `import Gallery from "kromac/lib/Gallery";`;

const notes = `the numbers of the <b>columns</b> by default is <div class="chip">3</div> 
when the screen is <b>lg</b> or <b>md</b> by bootstrap. <br />
And when the screen is <b>sm</b> or <b>lower</b> the numbers of the columns is <div class="chip">1</div>.
`;

const galleryProps = {
  images: [
    "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
    "https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg",
    "https://img.apksum.com/93/com.mda.black.wallpapers.hd.dark.background/5.0/icon.png",
    "https://i.pinimg.com/originals/54/b4/38/54b438c99e19dc7450afcdc80955810c.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
    "https://cdn.wallpapersafari.com/3/74/iVxWUY.jpg",
    "https://www.wallpapertip.com/wmimgs/5-53557_wallpaper-hd-1080p-mikael-gustafsson.jpg",
    "https://greatloveart.com/wp-content/uploads/2021/01/cool-iPhone-wallpapers-backgrounds-22.jpg"
  ],
  galleryType: "polygon"
};

const componentText = `<div>
  <Gallery
    galleryType="polygon"
    images="[strings]
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
