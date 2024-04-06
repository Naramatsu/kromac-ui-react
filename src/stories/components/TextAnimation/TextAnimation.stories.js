import { TextAnimation } from "./TextAnimation";

export default {
  title: "Kromac UI: TextAnimation",
  component: TextAnimation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const Default = {
  args: {
    word1: "Someword",
    word2: "Heree",
  },
};
