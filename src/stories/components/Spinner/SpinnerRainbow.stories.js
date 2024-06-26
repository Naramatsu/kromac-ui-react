import { SpinnerRainbow } from "./Spinner";

export default {
  title: "Kromac UI: Spinner Rainbow",
  component: SpinnerRainbow,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const Rainbow = {
  args: {
    spinnerType: "rainbow",
  },
};
