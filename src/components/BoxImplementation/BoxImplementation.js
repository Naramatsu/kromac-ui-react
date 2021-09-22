import React from "react";

const BoxImplementation = ({ componentText }) =>
  <div className="div-implementation">
    <span className="red" />
    <span className="yellow" />
    <span className="green" />
    <code>
      {componentText}
    </code>
  </div>;

export default BoxImplementation;
