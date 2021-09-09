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
      row: 2
    },
    {
      img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
      col: 2
    },
    { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
    { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
    {
      img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
      col: 2
    },
    {
      img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
      col: 2
    },
    { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
    {
      img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
      row: 2
    },
    { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
    {
      img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
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
      { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
      { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
      {
        img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
        col: 2
      },
      {
        img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
        col: 2
      },
      { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
      {
        img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
        row: 2
      },
      { img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg" },
      {
        img: "https://i.ytimg.com/vi/DG3rk0aGlpA/maxresdefault.jpg",
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
