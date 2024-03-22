const subTitle = "";
const importType = (version) => `import "${version}/dist/index.css"`;

const kromacClassProp = {
  image:
    "https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",
  name: "Your name here",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;p </span>
      <span className="component">className</span>=
      <span className="string">"text-bg-light"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">text-bg-light</span>
      <br />
      <span className="var">&lt;/p&gt;</span>
      <br />
      <span className="var">&lt;p </span>
      <span className="component">className</span>=
      <span className="string">"text-bg-dark"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">text-bg-dark</span>
      <br />
      <span className="var">&lt;/p&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"kromac-scroll"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">kromac-scroll</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"kromac-scroll-bg-dark"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">kromac-scroll-bg-dark</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"primary"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">primary</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"success"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">success</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"warning"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">warning</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"error"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">error</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"danger"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">danger</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"info"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">info</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
      <span className="var">&lt;div </span>
      <span className="component">className</span>=
      <span className="string">"night"</span>
      <span className="var">&gt;</span>
      <br />
      <span className="text tab">night</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
      <br />
    </p>
  </div>
);

const propsDescription = [
  {
    name: "text-bg-light",
    type: "className",
    values: [],
    description: "Adds a dark shadows.",
  },
  {
    name: "text-bg-dark",
    type: "className",
    values: [],
    description: "Adds a white shadows.",
  },
  {
    name: "kromac-scroll",
    type: "className",
    values: [],
    description: "Adds a little but pretty scroll when you theme is lighter.",
  },
  {
    name: "kromac-scroll-bg-dark",
    type: "className",
    values: [],
    description: "Adds a little but pretty scroll when you theme is darker.",
  },
  {
    name: "primary",
    type: "className",
    values: [],
    description: "Adds a #2E86C1 background color.",
  },
  {
    name: "success",
    type: "className",
    values: [],
    description: "Adds a #28B463 background color.",
  },
  {
    name: "warning",
    type: "className",
    values: [],
    description: "Adds a #F1C40F background color.",
  },
  {
    name: "error",
    type: "className",
    values: [],
    description: "Adds a #CB4335 background color.",
  },
  {
    name: "danger",
    type: "className",
    values: [],
    description: "Adds a #D68910 background color.",
  },
  {
    name: "info",
    type: "className",
    values: [],
    description: "Adds a #D5DBDB background color.",
  },
  {
    name: "night",
    type: "className",
    values: [],
    description: "Adds a #212F3D background color.",
  },
];

const sliderProps = {
  kromacClassProp,
  componentText,
  importType,
  propsDescription,
  subTitle,
};

export default sliderProps;
