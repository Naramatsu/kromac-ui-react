import { KROMAC_V18 } from "./constants";

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
export const requirements = (version) => {
  const versionShort = version === KROMAC_V18 ? "18" : "17";
  return [
    {
      product: "Node version: ",
      version: "^18",
    },
    {
      product: "Npm version: ",
      version: "^9",
    },
    {
      product: "React version: ",
      version: `^${versionShort}`,
    },
    {
      product: "react-router-dom version: ",
      version: "^5",
    },
  ];
};
export const resourcesTitle = `Resources`;
export const implementationTitle = "Implementation";
export const componentText = (version) => {
  const versionShort = version === KROMAC_V18 ? "18" : "17";
  return (
    <div className="implementation kromac-scroll-bg-dark">
      <p className="comment">{`// Kromac Styles importation for React version ${versionShort}`}</p>
      <p className="comment">{`// Locate in your main index.js file and implement the following line:`}</p>
      <p>
        <span className="var"> import </span>
        <span className="string">{`"${version}/src/css/style.css"`}</span>;
      </p>
      <br />
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
        <span className="string">{`"${version}/dist"`}</span>;
      </p>
      <br />
      <p className="comment">{`// Normal import`}</p>
      <p>
        <span className="var"> import</span>
        <span className="component"> Card </span>
        <span className="import"> from </span>
        <span className="string">{`"${version}/dist/Card"`}</span>;
      </p>
      <br />
    </div>
  );
};
export const technogloiesTitle = `technologies`;
export const sponsorText =
  "We are currently looking for support to keep this Project going on.";
export const teamTitle = `Team`;
export const sponsorTitle = `Sponsors`;
export const comingsoonText = `We are currently working to expand kromac ui to other platforms, frameworks, and languages.`;
