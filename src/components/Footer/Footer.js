import React from "react";

const year = new Date().getFullYear();

const Footer = () => (
  <div className="kromac-footer-container">
    <div className="kromac-footer">
      <a
        href="https://github.com/kromac-ui/kromac-ui-react/blob/main/POLICY.md"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-bg-light">Kromac UI Copyright © {year}</span>
      </a>
    </div>
  </div>
);

export default Footer;
