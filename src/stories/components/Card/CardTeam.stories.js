import { CardTeam } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Kromac UI: Card Team",
  component: CardTeam,
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
    cardType: "team",
    image:
      "https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg",
    name: "Card name",
    profession: "Card profession",
    color: "#154360",
    media: [
      { name: "facebook", url: "#" },
      { name: "instagram", url: "#" },
      { name: "linkedin", url: "#" },
      { name: "twitter", url: "#" },
    ],
  },
};

export const Video = {
  args: {
    cardType: "team",
    video: {
      url: "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4",
      controls: false,
      autoPlay: true,
      muted: true,
      loop: true,
    },
    name: "Card name",
    profession: "Card profession",
    color: "#154360",
    media: [
      { name: "facebook", url: "#" },
      { name: "instagram", url: "#" },
      { name: "linkedin", url: "#" },
      { name: "twitter", url: "#" },
    ],
  },
};
