import { SpinnerLighter } from "./Spinner";

export default {
  title: "Kromac UI: Spinner Lighter",
  component: SpinnerLighter,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
};

export const Lighter = {
  args: {
    spinnerType: "lighter",
  },
};
