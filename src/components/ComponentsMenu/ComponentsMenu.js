import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import data from "../../utils/components.json";
import "./style.scss";

const ComponentsMenu = () => {
  const [kromacComponents, setComponents] = useState(
    data.map(c => c.component).sort()
  );
  const [componentsFiltered, setComponentsFiltered] = useState("");
  const [subComponents, setSubComponents] = useState();

  const handleChangeFilter = e => {
    e.preventDefault();
    const { target: { value } } = e;
    if (e) {
      setComponentsFiltered(value);
      const filtereds = data
        .map(c => c.component)
        .sort()
        .filter(components => components.includes(value));
      setComponents(filtereds);
    } else {
      setComponents(data.sort());
    }
  };

  const handleClick = e => {
    const { target: { name } } = e;
    if (name === "home") {
      setSubComponents([]);
    }
    setSubComponents(data.map(c => c).filter(c => c.component === name));
  };

  const showSubComponents = subComponents && subComponents.length > 0;

  return (
    <div className="kromac-components kromac-scroll">
      <div className="kromac-title">
        <h1>Kromac UI</h1>
        <p>v1.0.0</p>
      </div>
      <div className="kromac-components-list">
        <div className="kromac-input-search">
          <label className="text-bg-light">Find Component</label>
          <input
            type="text"
            name="filter"
            placeholder="Find component"
            value={componentsFiltered}
            onChange={handleChangeFilter}
          />
        </div>
        <ul>
          <Route>
            <li style={{ textTransform: "capitalize" }}>
              <Link to="/" name="home" onClick={handleClick}>
                Home
              </Link>
            </li>
            {kromacComponents &&
              kromacComponents.map((link, index) =>
                <li key={index} style={{ textTransform: "capitalize" }}>
                  <Link to={link} onClick={handleClick} name={link}>
                    {link}
                  </Link>
                  {showSubComponents &&
                    subComponents[0].component === link &&
                    <ul>
                      {subComponents.map(c =>
                        c.subComponents.map((sc, index) =>
                          <li key={index}>
                            <Link
                              to={{
                                pathname: link,
                                state: sc.type
                              }}
                              onClick={handleClick}
                              name={link}
                            >
                              {sc.component}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>}
                </li>
              )}
          </Route>
        </ul>
      </div>
    </div>
  );
};

export default ComponentsMenu;
