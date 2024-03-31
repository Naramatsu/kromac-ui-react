import { BannerClassic } from "./Banner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Kromac UI: Banner Classic",
  component: BannerClassic,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Classic = {
  args: {
    image:
      "https://cdn.pixabay.com/photo/2018/04/22/23/18/skeleton-3342754_1280.png",
    height: "300px",
    overlay: true,
    color: "#fff",
    children: (
      <section>
        <h1 className="text-bg-light">Title Here</h1>
        <p className="text-bg-light">Some text here</p>
      </section>
    ),
  },
};
