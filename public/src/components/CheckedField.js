import React, { useState } from "react";

const CheckedField = (props) => {
  const [showChecked, setShowChecked] = useState(0);

  return (
    <div className="checkedFieldGroup">
      <input
        type="checkbox"
        id="checkinSelect"
        onChange={() => setShowChecked(!showChecked)}
      />
      <label htmlFor="checkinSelect">{props.title}</label>
      <div id={props.childID} className={showChecked ? "on" : "off"}>
        {props.children}
      </div>
    </div>
  );
};

export default CheckedField;
