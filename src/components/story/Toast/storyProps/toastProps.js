const subTitle = "";
const importType = (version) => `import Toast from "${version}/dist/Toast";`;

const toastProp = {
  message: "Some text here...!",
  visible: true,
  timeOut: 500000,
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Toast</span>
      <br />
      <span className="var tab">message</span>=
      <span className="string">"Some text here...!"</span>
      <br />
      <span className="var tab">visible</span>
      <br />
      <span className="var tab">timeOut</span>=<span>{`{`}</span>
      <span className="text">500000</span>
      <span>{`}`}</span>
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
    name: "visible",
    type: "bool",
    values: [`default false`],
    description: "When this prop turned on, it displays the Toast.",
  },
  {
    name: "timeOut",
    type: "number",
    values: [`default 5000`],
    description: "Duration in ms.",
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
