import { CardImage } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Kromac UI: Card Image",
  component: CardImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Image = {
  args: {
    image:
      "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
    title: "Card title",
    cardType: "image",
  },
};

export const Video = {
  args: {
    video: {
      url: "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4",
      controls: false,
      autoPlay: true,
      muted: true,
      loop: true,
    },
    title: "Card title",
    cardType: "image",
  },
};
