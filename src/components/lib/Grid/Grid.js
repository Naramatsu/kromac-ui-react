import React from "react";

const gridTemplateGenerator = columns => {
  let gridTemplate = `"`;
  let gridTemplateColumns = ``;
  let percentage = 100 / columns;
  for (let i = 0; i < columns; i++) {
    gridTemplate += `1fr `;
    gridTemplateColumns += `${percentage}% `;
  }
  gridTemplate += `" / ${percentage}%`;
  return {
    gridTemplate,
    gridTemplateColumns
  };
};

const calculateColumns = columns => {
  if (columns <= 0) {
    return gridTemplateGenerator(4);
  }
  if (columns >= 24) {
    return gridTemplateGenerator(24);
  }
  return gridTemplateGenerator(columns);
};
const Grid = ({ columns = 4, children }) => {
  const draw = calculateColumns(columns);

  return (
    <div className="kromac-grid" style={draw}>
      {children}
    </div>
  );
};

export default Grid;
