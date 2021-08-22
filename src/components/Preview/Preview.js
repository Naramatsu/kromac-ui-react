import React from "react";
import { Table } from "react-bootstrap";
import parseToHtml from "html-react-parser";
import { addChip } from "../../utils/utils";
import "./style.scss";

const Preview = props => {
  const {
    title,
    subTitle = "",
    description,
    importType,
    propsDescription,
    notes = ""
  } = props;

  return (
    <div className="preview">
      <h1 className="component-title">
        {title}
        {subTitle.trim() && <label>{` > ${subTitle}`}</label>}
      </h1>
      <p className="component-description">
        {description}
      </p>
      <label className="label-import">
        {importType}
      </label>
      <h3 className="component-implementation">Implementation</h3>
      <div className="component-preview">
        {props.children}
        <div className="component-props">
          <h3>Props</h3>
          <div className="component-props-table">
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Values</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {propsDescription.map((desc, index) =>
                  <tr key={index}>
                    <td>
                      {desc.name}
                    </td>
                    <td>
                      {addChip(desc.type)}
                    </td>
                    <td>
                      {desc.values.map((val, index) => addChip(val, index))}
                    </td>
                    <td>
                      {desc.description}
                    </td>
                  </tr>
                )}
              </tbody>
              <tbody />
            </Table>
          </div>
        </div>
        <div className="component-props">
          <h3>Notes</h3>
          {parseToHtml(notes)}
        </div>
      </div>
    </div>
  );
};

export default Preview;
