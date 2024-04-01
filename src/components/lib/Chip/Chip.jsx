import React from "react";
import classNames from "classnames";

const Chip = ({ children, color = "#e4e4e4", fontColor = "#000", ...rest }) => {
  const chipClassNames = classNames("kromac-chip", {
    [rest.className]: !!rest.className,
  });
  const styles = {
    ...rest.style,
    background: color,
    color: fontColor,
  };
  return (
    <section className={chipClassNames} style={styles} {...rest}>
      {children}
    </section>
  );
};

export default Chip;
