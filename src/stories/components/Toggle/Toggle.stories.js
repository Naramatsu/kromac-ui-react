import { Toggle } from "./Toggle";

export default {
  title: "Kromac UI: Toggle",
  component: Toggle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const Switch = {
  args: {},
};

export const Power = {
  args: {
    toggleType: "power",
  },
};
