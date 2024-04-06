import { GridItem } from "./GridItem";

export default {
  title: "Kromac UI: GridItem",
  component: GridItem,
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
    clg: 1,
    cmd: 1,
    csm: 1,
    cxs: 4,
    gridRow: 2,
    children: "you content here...!",
  },
};
