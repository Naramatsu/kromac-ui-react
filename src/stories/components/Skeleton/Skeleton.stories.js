import { Skeleton } from "./Skeleton";

export default {
  title: "Kromac UI: Skeleton",
  component: Skeleton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    width: "250px",
  },
};

export const Light = {
  args: {},
};

export const LightRound = {
  args: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  },
};

export const Dark = {
  args: {
    className: "dark",
  },
};

export const DarkRound = {
  args: {
    className: "dark",
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  },
};
