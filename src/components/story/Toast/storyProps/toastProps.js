const subTitle = "";
const importType = (version) => `import Toast from "${version}/dist/Toast";`;

const toastProp = {
  message: "Some text here...!",
  alwaysVisible: true,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Toast</span>
      <br />
      <span className="var tab">message</span>=
      <span className="string">"Some text here...!"</span>
      <br />
      <span className="var tab">alwaysVisible</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "message",
    type: "string Required",
    values: [],
    description: "Toast message.",
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
      "transparent",
    ],
    description: "Sets background color.",
  },
  {
    name: "alwaysVisible",
    type: "bool",
    values: [`default false`],
    description: "When this prop turned on, it displays the Toast.",
  },
  {
    name: "visible",
    type: "bool",
    values: [`default false`],
    description: "When this prop turned on, it displays the Toast.",
  },
  {
    name: "timeOut",
    type: "number",
    values: [`default 5000`],
    description: `This prop set the duration in ms only when "visible" prop is setting on.`,
  },
  {
    name: "positionY",
    type: "string",
    values: [`default bottom`, "top", "bottom"],
    description: "Toast position in Y-axis of the screen.",
  },
  {
    name: "positionX",
    type: "string",
    values: [`default left`, "right", "left"],
    description: "Toast position in X-axis of the screen.",
  },
];

const sliderProps = {
  componentText,
  importType,
  propsDescription,
  subTitle,
  toastProp,
};

export default sliderProps;
