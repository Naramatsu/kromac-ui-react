const subTitle = "";
const storyLink = "/?path=/story/kromac-ui-textanimation--default";
const importType = (version) =>
  `import TextAnimation from "${version}/ldist/TextAnimation";`;
const notes = `
For a better experience just send a word (no white space) in the props
<div class="chip">word1</div>,
<div class="chip">word2</div>.
`;

const textAnimationProp = {
  word1: "Someword",
  word2: "Heree",
};

const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p>
      <span className="react">&lt;TextAnimation</span>
      <br />
      <span className="var tab">word1</span>=
      <span className="string">"Someword"</span>
      <br />
      <span className="var tab">word2</span>=
      <span className="string">"Heree"</span>
      <br />
      <span className="react">/&gt;</span>
    </p>
  </div>
);

const propsDescription = [
  {
    name: "word1",
    type: "string Required",
    values: [],
    description: "Just a word.",
  },
  {
    name: "word2",
    type: "string",
    values: [],
    description: "Just another word.",
  },
  {
    name: "timer",
    type: "string",
    values: [`default 6s`],
    description: "Animation transition time in seconds.",
  },
  {
    name: "background",
    type: "string",
    values: [`default linerar-gradient`],
    description: "Sets the background color.",
  },
  {
    name: "fontColor",
    type: "string",
    values: [`default #fff`],
    description: "Sets the font color.",
  },
  {
    name: "fontSize",
    type: "string",
    values: ["default 2 em"],
    description: "Font size.",
  },
];

const textAnimationProps = {
  componentText,
  importType,
  notes,
  propsDescription,
  subTitle,
  textAnimationProp,
  storyLink,
};

export default textAnimationProps;
