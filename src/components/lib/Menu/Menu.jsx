import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";

const setActiveTab = (pathname, tab) => {
  if (pathname.includes(tab)) return "kromac-menu-list active";
  return "kromac-menu-list";
};

const Menu = (props) => {
  const {
    location: { pathname = "/" },
    appName,
    imgLogo,
    tabs = [],
    searchComponents = false,
    bgColor = "#283747",
    hamburgerActiveColor = "#C0392B",
    hamburgerColor = "#283747",
    homeUrl = "/",
    transition = ".5s",
    ...rest
  } = props;

  const { key, id } = rest;
  const newRest = {
    key,
    id,
  };

  const [hambuergerIsActive, setHambuergerIsActive] = useState("");
  const [componentsFiltered, setComponentsFiltered] = useState("");
  const [components, setComponents] = useState(tabs.sort());

  useEffect(() => {
    setHambuergerIsActive("");
  }, [pathname]);

  const styleMenu = {
    "--bgColor": bgColor,
    "--hamburgerActiveColor": hamburgerActiveColor,
    "--hamburgerColor": hamburgerColor,
    "--transition": transition,
  };

  const handleChangeFilter = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    if (event) {
      setComponentsFiltered(value);
      const filtereds = tabs
        .sort()
        .filter((components) => components.includes(value));
      setComponents(filtereds);
    } else {
      setComponents(tabs.sort());
    }
  };

  const handleActive = (event) => {
    event.preventDefault();
    setHambuergerIsActive(() => {
      if (hambuergerIsActive === "") {
        return "active";
      }
      return "";
    });
  };

  const kromacMenu = classNames("kromac-menu-hamburger", "kromac-scroll", {
    [hambuergerIsActive]: !!hambuergerIsActive,
    [rest.className]: !!rest.className,
  });

  return (
    <div {...newRest} className={kromacMenu} style={styleMenu}>
      <div
        className={`kromac-hamburger-menu ${hambuergerIsActive}`}
        onClick={handleActive}
      >
        <img
          src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634352894/kromac-ui/hmenu_i0slih.png"
          alt="menu"
          className="open"
        />
        <img
          src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634353013/kromac-ui/close_qcispf.png"
          alt="close"
          className="close"
        />
      </div>
      <div className="kromac-title text-bg-light">
        <Link to={homeUrl}>
          {imgLogo && <img src={imgLogo} alt="logo" />}
          {appName && <h1>{appName}</h1>}
        </Link>
        {searchComponents && (
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
        )}
      </div>
      <ul>
        {components.map((link, index) => (
          <li key={index} className={setActiveTab(pathname, link)}>
            <b />
            <b />
            <Link to={link}>
              <span className="kromac-menu-title text-bg-light">{link}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
