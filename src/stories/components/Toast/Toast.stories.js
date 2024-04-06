import { Toast } from "./Toast";

export default {
  title: "Kromac UI: Toast",
  component: Toast,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    alwaysVisible: true,
    message: "Some text here...!",
  },
};

export const Default = {
  args: {},
};

export const Primary = {
  args: {
    color: "primary",
  },
};

export const Success = {
  args: {
    color: "success",
  },
};

export const Error = {
  args: {
    color: "error",
  },
};

export const Danger = {
  args: {
    color: "danger",
  },
};

export const Warning = {
  args: {
    color: "warning",
  },
};

export const Info = {
  args: {
    color: "info",
  },
};

export const Transparent = {
  args: {
    color: "transparent",
  },
};
