import React, { lazy } from "react";
import parseToHtml from "html-react-parser";
import { Link } from "react-router-dom";
import { addChip } from "../../utils/utils";
import "./Preview.scss";

const Table = lazy(() => import("react-bootstrap/Table"));

const Preview = props => {
  const {
    title,
    subTitle = "",
    description,
    importType,
    propsDescription,
    notes = "",
    componentsRealated
  } = props;
  const isNotes = notes && notes.trim();

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
      <h3 className="component-implementation">Preview</h3>
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
        {isNotes &&
          <div className="component-props">
            <h3>Notes</h3>
            {parseToHtml(notes)}
          </div>}
        {componentsRealated &&
          <div className="component-props components-related">
            <h3>Components Related</h3>
            <ul>
              {componentsRealated.map((link, index) =>
                <li key={index}>
                  <Link
                    to={{
                      pathname: `/${title.toLowerCase()}`,
                      state: link.type
                    }}
                  >
                    {link.component}
                  </Link>
                </li>
              )}
            </ul>
          </div>}
      </div>
    </div>
  );
};

export default Preview;
