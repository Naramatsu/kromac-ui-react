const subTitle = "";
const importType = `import Toast from "kromac/lib/Toast";`;

const toastProp = {
  message: "Some text here...!",
  visible: true,
  timeOut: 500000
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;Toast</span>
      <br />
      <span className="var tab2">message</span>=<span className="string">
        "Some text here...!"
      </span>
      <br />
      <span className="var tab2">visible</span>
      <br />
      <span className="var tab2">timeOut</span>=<span>{`{`}</span>
      <span className="text">500000</span>
      <span>{`}`}</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

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
