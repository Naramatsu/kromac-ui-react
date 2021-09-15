const subTitle = "";
const importType = `import Toast from "kromac/lib/Toast";`;

const toastProp = {
  message: "Some text here...!",
  visible: true,
  timeOut: 500000
};

const componentText = `<div>
  <Toast
    message="Some text here...!"
    visible
    timeOut={500000}
  />
</div>`;

const propsDescription = [
  {
    name: "message",
    type: "string Required",
    values: [],
    description: "Toast message"
  },
  {
    name: "color",
    type: "string",
    values: [
      "default night",
      "primary",
      "success",
      "error",
      "danger",
      "warning",
      "info",
      "night",
      "transparent"
    ],
    description: "Toast background"
  },
  {
    name: "icon",
    type: "string",
    values: [],
    description:
      "If you wanna a descriptive icon, pls use one of the follow => https://ionic.io/ionicons"
  },
  {
    name: "visible",
    type: "bool",
    values: [`default false`],
    description: "set true to show the toast"
  },
  {
    name: "timeOut",
    type: "number",
    values: [`default 5000`],
    description: "Toast duration in ms"
  },
  {
    name: "positionY",
    type: "string",
    values: [`default bottom`, "top", "bottom"],
    description: "position in Y eje"
  },
  {
    name: "positionX",
    type: "string",
    values: [`default left`, "right", "left"],
    description: "position in X eje"
  }
];

const sliderProps = {
  subTitle,
  importType,
  toastProp,
  propsDescription,
  componentText
};

export default sliderProps;
