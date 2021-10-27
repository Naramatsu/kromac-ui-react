export const kromac = <b>Kromac UI </b>;
export const introductionTitle = "Introduction";
export const introduction = (
  <p style={{ marginTop: "1em" }}>
    {kromac} is a <b>100% responsive</b> style framework that seeks to
    facilitate the development and implementation of components with modern
    styles to web applications.
  </p>
);

export const installationTitle = "Installation";
export const requirementsTitle = "Requirements";
export const requirementsText = (
  <p>
    In order to implement {kromac} your project must have the following
    requirements:
  </p>
);
export const requirements = [
  {
    product: "Node version: ",
    version: "^14"
  },
  {
    product: "Npm version: ",
    version: "^7"
  },
  {
    product: "React version: ",
    version: "^17"
  },
  {
    product: "react-router-dom version: ",
    version: "^5"
  }
];
export const resourcesTitle = `Resources`;
export const implementationTitle = "Implementation";
export const componentText = (
  <div className="implementation kromac-scroll-bg-dark">
    <p className="comment">{`// Component Implementation`}</p>
    <p className="comment">{`// We will take the Card component as an example.`}</p>
    <br />
    <p className="comment">{`// Destructuring import`}</p>
    <p>
      <span className="var"> import</span>
      <span>{` { `}</span>
      <span className="component">Card </span>
      <span>{` } `}</span>
      <span className="import">from </span>
      <span className="string">{`"kromac-ui/dist"`}</span>
      ;
    </p>
    <br />
    <p className="comment">{`// Normal import`}</p>
    <p>
      <span className="var"> import</span>
      <span className="component"> Card </span>
      <span className="import"> from </span>
      <span className="string">{`"kromac-ui/dist/Card"`}</span>
      ;
    </p>
    <br />
    <p className="comment">{`// Kromac Styles importation`}</p>
    <p className="comment">{`// Locate in your main index.js file and implement the following line:`}</p>
    <p>
      <span className="var"> import </span>
      <span className="string">{`"kromac-ui/dist/index.css"`}</span>
      ;
    </p>
  </div>
);
export const technogloiesTitle = `technogloies`;
export const sponsorText =
  "We are currently looking for support to keep this Project going on.";
export const teamTitle = `Team`;
export const sponsorTitle = `Sponsors`;
export const comingsoonText = `We are currently working to expand kromac ui to other platforms, frameworks, and languages.`;
