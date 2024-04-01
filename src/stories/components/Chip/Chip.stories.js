import { Chip } from "./Chip";

export default {
  title: "Kromac UI: Chip",
  component: Chip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    children: "Your name",
  },
};

export const Default = {
  args: {},
};
