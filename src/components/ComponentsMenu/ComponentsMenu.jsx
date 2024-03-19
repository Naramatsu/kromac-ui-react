import React, { useState } from "react";
import menuComponents from "../../utils/components.json";
import { Route, Link } from "react-router-dom";

const ComponentsMenu = () => {
  const [kromacComponents, setComponents] = useState(
    menuComponents.map((menuComponent) => menuComponent.component).sort()
  );
  const [componentsFiltered, setComponentsFiltered] = useState("");
  const [subComponents, setSubComponents] = useState();

  const handleChangeFilter = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    if (event) {
      setComponentsFiltered(value);
      const filtereds = menuComponents
        .map((component) => component.component)
        .sort()
        .filter((components) => components.includes(value));
      setComponents(filtereds);
    } else {
      setComponents(menuComponents.sort());
    }
  };

  const handleClick = (event) => {
    const {
      target: { name },
    } = event;
    if (name === "home") {
      setSubComponents([]);
    }
    setSubComponents(
      menuComponents
        .map((menuComponent) => menuComponent)
        .filter((menuComponent) => menuComponent.component === name)
    );
  };

  const showSubComponents = subComponents && subComponents.length > 0;
  const activeSubComponent = ({ showSubComponents, subComponents, link }) => {
    return showSubComponents &&
      showSubComponents &&
      subComponents[0].component === link
      ? "active"
      : "";
  };

  return (
    <div className="kromac-components kromac-scroll">
      <div className="kromac-title">
        <Route>
          <Link to="/" name="home" onClick={handleClick}>
            <img
              src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634697765/kromac-ui/kromac-logov2_cov1m7.png"
              alt="logo"
            />
            <h1>Kromac UI</h1>
            <p>v1.2.4</p>
          </Link>
        </Route>
        <div className="kromac-input-search">
          <label className="text-bg-light">Find Component</label>
          <input
            type="text"
            name="filter"
            autoComplete="off"
            placeholder="Find component"
            value={componentsFiltered}
            onChange={handleChangeFilter}
          />
        </div>
      </div>
      <div className="kromac-components-list">
        <ul>
          <Route>
            {kromacComponents &&
              kromacComponents.map((link, index) => (
                <li key={index} style={{ textTransform: "capitalize" }}>
                  <Link to={link} onClick={handleClick} name={link}>
                    {link}
                  </Link>
                  <ul
                    className={`sub-components ${activeSubComponent({
                      showSubComponents,
                      subComponents,
                      link,
                    })}`}
                  >
                    {showSubComponents &&
                      subComponents[0].component === link &&
                      subComponents.map((component) =>
                        component.subComponents.map((subComponent, index) => (
                          <li key={index}>
                            <Link
                              to={{
                                pathname: link,
                                state: subComponent.type,
                              }}
                              onClick={handleClick}
                              name={link}
                            >
                              {subComponent.component}
                            </Link>
                          </li>
                        ))
                      )}
                  </ul>
                </li>
              ))}
          </Route>
        </ul>
      </div>
    </div>
  );
};

export default ComponentsMenu;
