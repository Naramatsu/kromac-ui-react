import { Grid } from "./Grid";

export default {
  title: "Kromac UI: Grid",
  component: Grid,
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
    children: (
      <>
        <div className="grid-preview">Div 1</div>
        <div className="grid-preview">Div 2</div>
        <div className="grid-preview">Div 3</div>
        <div className="grid-preview">Div 4</div>
      </>
    ),
  },
};
