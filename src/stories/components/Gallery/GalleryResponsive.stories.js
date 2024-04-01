import { GalleryResponsive } from "./Gallery";

export default {
  title: "Kromac UI: Gallery Responsive",
  component: GalleryResponsive,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
};

export const Default = {
  args: {
    content: [
      {
        video:
          "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4",
        row: 2,
      },
      {
        img: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        col: 2,
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg",
      },
      {
        video:
          "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4",
        col: 2,
      },
      {
        img: "https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_1280.jpg",
        col: 2,
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",
        row: 2,
      },
      {
        img: "https://images.pexels.com/photos/5821029/pexels-photo-5821029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        img: "https://cdn.pixabay.com/photo/2020/05/17/20/34/concept-5183469_1280.jpg",
        col: 2,
      },
    ],
  },
};
