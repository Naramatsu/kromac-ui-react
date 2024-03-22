const subTitle = "Menu";
const importType = (version) => `import Menu from "${version}/dist/Menu";`;
const description = `Make sure the component to be imported is wrapped by reac-router-dom`;
const notes = `This component needs extrictly be wrapped by <div class="chip">react-router-dom</div> components.
<br />
<p>
  If you have a lot of tabs, do not worry, the scroll is functional but is transparent.
</p>
`;

const menuProps = {
  appName: "Some title",
  tabs: ["home", "menu"],
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="comment">
        {"// install react-router-dom => "}
        <a
          href="https://reactrouter.com/web/guides/quick-start"
          target="_blank"
          rel="noreferrer"
        >
          React-router-dom
        </a>
      </span>
      <br />
      <span className="comment">{"// wrap the main component "}</span>
      <br />
      <span className="comment">{"// index.js "}</span>
      <br />
      <span className="var"> import</span>
      <span>{` { `}</span>
      <span className="component">BrowserRouter</span>
      <span> as </span>
      <span className="component">Router</span>
      <span>, </span>
      <span className="component">Route </span>
      <span>{` } `}</span>
      <span className="import">from </span>
      <span className="string">{`"react-router-dom"`}</span>
      ;
      <br />
      <span className="react">ReactDOM</span>
      <span>.</span>
      <span className="function">{`render(`}</span>
      <br />
      <span className="react tab">&lt;Router&gt;</span>
      <br />
      <span className="react tab2">&lt;Route </span>
      <span className="var">path</span>
      <span>{"="}</span>
      <span className="string">{'"/"'}</span>
      <span className="react">&gt;</span>
      <br />
      <span className="react tab3">&lt;App /&gt;</span>
      <br />
      <span className="react tab2">&lt;/Route&gt;</span>
      <br />
      <span className="react tab">&lt;/Router&gt;</span>
      ,
      <br />
      <span className="var tab">document</span>.
      <span className="function">getElementById</span>
      <span>{"("}</span>
      <span className="string">{'"root"'}</span>
      <span>{")"}</span>
      <br />
      <span className="function">{`)`}</span>
      <span>;</span>
      <br />
      <br />
      <span className="comment">{"// Component.js "}</span>
      <br />
      <span className="comment">{"...your code here."}</span>
      <br />
      <span className="react">&lt;Menu</span>
      <br />
      <span className="component tab">appName</span>=
      <span className="string">"Some title"</span>
      <br />
      <span className="component tab">tabs</span>=<span>{`{[`}</span>
      <span className="string">"home"</span>,
      <span className="string">"menu"</span>
      <span>{`]}`}</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "appName",
    type: "string",
    values: [],
    description: "Sets the text that will be display as the app name.",
  },
  {
    name: "imgLogo",
    type: "string",
    values: [],
    description: "Image url.",
  },
  {
    name: "tabs",
    type: "array",
    values: [],
    description: "String array of tabs name.",
  },
  {
    name: "searchComponents",
    type: "bool",
    values: ["default false"],
    description: "Adds an input to search by tab name.",
  },
  {
    name: "bgColor",
    type: "string",
    values: ["default #283747"],
    description: "Sets background color.",
  },
  {
    name: "hamburgerColor",
    type: "string",
    values: ["default #283747"],
    description: "Sets background color of the hamburgermenu button.",
  },
  {
    name: "hamburgerActiveColor",
    type: "string",
    values: ["default #C0392B"],
    description:
      "Sets background color of the hamburgermenu button when this is active.",
  },
  {
    name: "homeUrl",
    type: "string",
    values: ["default /"],
    description: "Sets url link to redirect to home page.",
  },
  {
    name: "transition",
    type: "string",
    values: ["default .5s"],
    description: "Transition time.",
  },
];

const buttonsProps = {
  componentText,
  description,
  importType,
  menuProps,
  notes,
  propsDescription,
  subTitle,
};

export default buttonsProps;
