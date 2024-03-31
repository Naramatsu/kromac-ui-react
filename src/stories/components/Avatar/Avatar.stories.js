import { Avatar } from "./Avatar";

export default {
  title: "Kromac UI: Avatar",
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const Image = {
  args: {
    image:
      "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
    name: "Your name here",
  },
};

export const ImageStatic = {
  args: {
    image:
      "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
    name: "Your name here",
    isStatic: true,
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
    name: "Your name here",
  },
};

export const VideoStatic = {
  args: {
    video: {
      url: "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4",
      controls: false,
      autoPlay: true,
      muted: true,
      loop: true,
    },
    name: "Your name here",
    isStatic: true,
  },
};
