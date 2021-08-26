import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./style.scss";

const setActiveTab = (pathname, tab) => {
  if (pathname.includes(tab)) {
    return "kromac-menu-list active";
  }
  return "kromac-menu-list";
};

const Menu = props => {
  const {
    location: { pathname = "/" },
    appName,
    tabs = [],
    searchComponents = true
  } = props;

  const [hambuergerIsActive, setHambuergerIsActive] = useState("");
  const [subComponents, setSubComponents] = useState([]);
  const [componentsFiltered, setComponentsFiltered] = useState("");
  const [components, setComponents] = useState(
    tabs.map(c => c.component).sort()
  );

  const handleChangeFilter = e => {
    e.preventDefault();
    const { target: { value } } = e;
    if (e) {
      setComponentsFiltered(value);
      const filtereds = tabs
        .map(c => c.component)
        .sort()
        .filter(components => components.includes(value));
      setComponents(filtereds);
    } else {
      setComponents(tabs.sort());
    }
  };

  const handleActive = e => {
    e.preventDefault();
    setHambuergerIsActive(() => {
      if (hambuergerIsActive === "") {
        return "active";
      }
      return "";
    });
  };

  const handleClick = e => {
    const { target: { name } } = e;
    if (name === "home") {
      setSubComponents([]);
    }
    setSubComponents(tabs.map(c => c).filter(c => c.component === name));
  };

  const showSubComponents = subComponents && subComponents.length > 0;

  return (
    <div className={`kromac-menu kromac-scroll ${hambuergerIsActive}`}>
      <div className="kromac-title text-bg-light">
        <h1>
          {appName}
        </h1>
      </div>
      {searchComponents &&
        <div className="kromac-input-search">
          <label className="text-bg-light">Find Component</label>
          <input
            type="text"
            name="filter"
            placeholder="Find component"
            value={componentsFiltered}
            onChange={handleChangeFilter}
          />
        </div>}
      <div
        className={`kromac-hamburger-menu ${hambuergerIsActive}`}
        onClick={handleActive}
      >
        <ion-icon name="menu-outline" class="open" />
        <ion-icon name="close-outline" class="close" />
      </div>
      <ul>
        <li className={setActiveTab(pathname, "home")}>
          <b />
          <b />
          <Link to="/" onClick={handleClick} name="home" >
            <span className="kromac-menu-title text-bg-light">Home</span>
          </Link>
          <ul>
            {components &&
              components.map((link, index) =>
                <li key={index} className={setActiveTab(pathname, link)}>
                  <b />
                  <b />
                  <Link to={link} onClick={handleClick} name={link}>
                    <span className="kromac-menu-title text-bg-light">
                      {link}
                    </span>
                  </Link>
                  {showSubComponents &&
                    subComponents[0].component === link &&
                    <ul className="sub-components">
                      <li key={index}>
                        <Link to={link} onClick={handleClick} name={link}>
                          {link}
                        </Link>
                      </li>
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
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
