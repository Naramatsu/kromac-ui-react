import { CardPercentage } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Kromac UI: Card Percentage",
  component: CardPercentage,
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
export const Transparent = {
  args: {
    cardType: "percentage",
    title: "Card title",
    progressColor: "#01E735",
    progress: 85,
  },
};

export const Color = {
  args: {
    cardType: "percentage",
    title: "Card title",
    color: "red",
    progressColor: "#01E735",
    progress: 50,
  },
};
