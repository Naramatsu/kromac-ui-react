import React, { useState, useEffect } from "react";

const draw = (property, value) => {
  return {
    [property]: `span ${value}`
  };
};

const applyProperty = (actualWidth, props) => {
  let validate = "";
  if (actualWidth >= 1024 && props.clg) {
    validate = props.clg;
  }
  if (actualWidth < 1024 && actualWidth >= 768 && props.cmd) {
    validate = props.cmd;
  }
  if (actualWidth < 768 && actualWidth >= 550 && props.csm) {
    validate = props.csm;
  }
  if (actualWidth < 550 && props.cxs) {
    validate = props.cxs;
  }
  return draw("gridColumn", validate);
};

const GridItem = props => {
  const [actualWidth, setActualWidth] = useState(window.innerWidth);
  useEffect(
    () => {
      const handleResize = window.addEventListener("resize", () => {
        setActualWidth(window.innerWidth);
      });

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    [actualWidth]
  );
  const { gridRow = "", children, id, className = "" } = props;
  const { cxs = 0, csm = 0, cmd = 0, clg = 0 } = props;
  const gridColumnFormatted = applyProperty(actualWidth, {
    cxs,
    csm,
    cmd,
    clg
  });
  const gridRowFormatted = draw("gridRow", gridRow);

  return (
    <div
      id={id}
      className={`kromac-grid-item ${className}`}
      style={{ ...gridColumnFormatted, ...gridRowFormatted }}
    >
      {children}
    </div>
  );
};

export default GridItem;
