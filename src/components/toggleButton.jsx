// Filename: ./components/ToggleSwitch.js

import React from "react";
import "./toggleButton.css";

const ToggleButton = ({ label, clickHandle }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          onClick={clickHandle}
          name={label}
          id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
