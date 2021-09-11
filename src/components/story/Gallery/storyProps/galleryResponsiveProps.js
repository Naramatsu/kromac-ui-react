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
      img: "https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg",
      row: 2,
    },
    {
      img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
      col: 2
    },
    { img: "http://www.solofondos.com/wp-content/uploads/2016/03/outrun-vaporwave-hd-wallpaper-preview.jpg" },
    { img: "https://img.apksum.com/93/com.mda.black.wallpapers.hd.dark.background/5.0/icon.png" },
    {
      img: "https://i.pinimg.com/originals/54/b4/38/54b438c99e19dc7450afcdc80955810c.jpg",
      col: 2
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
      col: 2
    },
    { img: "https://cdn.wallpapersafari.com/3/74/iVxWUY.jpg" },
    {
      img: "https://www.wallpapertip.com/wmimgs/5-53557_wallpaper-hd-1080p-mikael-gustafsson.jpg",
      row: 2
    },
    { img: "https://greatloveart.com/wp-content/uploads/2021/01/cool-iPhone-wallpapers-backgrounds-22.jpg" },
    {
      img: "https://www.xtrafondos.com/descargar.php?id=3183&resolucion=2560x1440",
      col: 2
    }
  ]
};

const componentText = `<div>
  <Gallery
    images="[
      {
        img: "https://images.pexels.com/photos/719396/pexels-photo-719396.jpe",
        row: 2
      },
      {
        img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
        col: 2
      },
      { img: "http://www.solofondos.com/wp-content/uploads/2016/03/outrun-vaporwave-hd-wallpaper-preview.jpg" },
      { img: "https://img.apksum.com/93/com.mda.black.wallpapers.hd.dark.background/5.0/icon.png" },
      {
        img: "https://i.pinimg.com/originals/54/b4/38/54b438c99e19dc7450afcdc80955810c.jpg",
        col: 2
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
        col: 2
      },
      { img: "https://cdn.wallpapersafari.com/3/74/iVxWUY.jpg" },
      {
        img: "https://www.wallpapertip.com/wmimgs/5-53557_wallpaper-hd-1080p-mikael-gustafsson.jpg",
        row: 2
      },
      { img: "https://greatloveart.com/wp-content/uploads/2021/01/cool-iPhone-wallpapers-backgrounds-22.jpg" },
      {
        img: "https://www.xtrafondos.com/descargar.php?id=3183&resolucion=2560x1440",
        col: 2
      }
    ]
  />
</div>`;

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
