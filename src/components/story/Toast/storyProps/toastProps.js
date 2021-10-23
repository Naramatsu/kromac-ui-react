const subTitle = "";
const importType = `import Toast from "kromac-ui/dist/Toast";`;

const toastProp = {
  message: "Some text here...!",
  visible: true,
  timeOut: 500000
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;Toast</span>
      <br />
      <span className="var tab">message</span>=<span className="string">
        "Some text here...!"
      </span>
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
    description: "Toast message."
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
    description: "Set the Toast background color."
  },
  {
    name: "visible",
    type: "bool",
    values: [`default false`],
    description: "This prop turned on show the toast."
  },
  {
    name: "timeOut",
    type: "number",
    values: [`default 5000`],
    description: "Toast duration in ms."
  },
  {
    name: "positionY",
    type: "string",
    values: [`default bottom`, "top", "bottom"],
    description: "Toast position in Y-axis."
  },
  {
    name: "positionX",
    type: "string",
    values: [`default left`, "right", "left"],
    description: "Toast position in X-axis."
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
