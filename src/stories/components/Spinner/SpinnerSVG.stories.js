import { SpinnerSVG } from "./Spinner";

export default {
  title: "Kromac UI: Spinner SVG",
  component: SpinnerSVG,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const SVG = {
  args: {
    spinnerType: "svg",
  },
};
