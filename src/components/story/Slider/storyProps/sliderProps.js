const subTitle = "";
const importType = `import Slider from "kromac/lib/Slider";`;

const sliderProp = {
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
  showPreview: true
};

const componentText = `<div>
  <Slider
    images={[
      "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
      "https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg",
      "https://img.apksum.com/93/com.mda.black.wallpapers.hd.dark.background/5.0/icon.png",
      "https://i.pinimg.com/originals/54/b4/38/54b438c99e19dc7450afcdc80955810c.jpg",
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
      "https://cdn.wallpapersafari.com/3/74/iVxWUY.jpg",
      "https://www.wallpapertip.com/wmimgs/5-53557_wallpaper-hd-1080p-mikael-gustafsson.jpg",
      "https://greatloveart.com/wp-content/uploads/2021/01/cool-iPhone-wallpapers-backgrounds-22.jpg"
    ]}
    showPreview
  />
</div>`;

const propsDescription = [
  {
    name: "images",
    type: "array Required",
    values: [],
    description: "Array list of strings"
  },
  {
    name: "height",
    type: "string",
    values: ["default 500px"],
    description: "height of the slider"
  },
  {
    name: "showPreview",
    type: "bool",
    values: [`default false`],
    description: "set to true will show a little preview below of each images"
  }
];

const sliderProps = {
  subTitle,
  importType,
  sliderProp,
  propsDescription,
  componentText
};

export default sliderProps;
