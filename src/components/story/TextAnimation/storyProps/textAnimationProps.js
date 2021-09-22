const subTitle = "";
const importType = `import TextAnimation from "kromac/lib/TextAnimation";`;

const textAnimationProp = {
  word1: "Someword",
  word2: "Heree"
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="var">&lt;div&gt;</span>
      <br />
      <span className="react tab">&lt;TextAnimation</span>
      <br />
      <span className="var tab2">
        word1
      </span>=<span className="string">"Someword"</span>
      <br />
      <span className="var tab2">
        word2
      </span>=<span className="string">"Heree"</span>
      <br />
      <span className="react tab">/&gt;</span>
      <br />
      <span className="var">&lt;/div&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "word1",
    type: "string Required",
    values: [],
    description: "Just a word"
  },
  {
    name: "word2",
    type: "string",
    values: [],
    description: "Just a word"
  },
  {
    name: "timer",
    type: "string",
    values: [`default 6s`],
    description: "Time of animation in seconds"
  },
  {
    name: "background",
    type: "string",
    values: [`default linerar-gradient`],
    description: "background that you want"
  },
  {
    name: "fontColor",
    type: "string",
    values: [`default #fff`],
    description: "font color"
  },
  {
    name: "fontSize",
    type: "string",
    values: ["default 2 em"],
    description: "font size"
  }
];

const textAnimationProps = {
  subTitle,
  importType,
  textAnimationProp,
  propsDescription,
  componentText
};

export default textAnimationProps;
