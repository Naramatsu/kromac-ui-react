import React from 'react';
import classNames from 'classnames';

const gridTemplateGenerator = (columns) => {
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
    gridTemplateColumns,
  };
};

const calculateColumns = (columns) => {
  if (columns <= 0) {
    return gridTemplateGenerator(4);
  }
  if (columns >= 24) {
    return gridTemplateGenerator(24);
  }
  return gridTemplateGenerator(columns);
};

const Grid = ({ columns = 4, children, ...rest }) => {
  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };
  const draw = calculateColumns(columns);
  const kromacGrid = classNames('kromac-grid', {
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} className={kromacGrid} style={draw}>
      {children}
    </div>
  );
};

export default Grid;
