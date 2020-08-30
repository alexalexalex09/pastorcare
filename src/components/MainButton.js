import React from "react";
import h from "../helpers/h";

const MainButton = (props) => {
  return (
    <div
      className="mainButton icon"
      id={props.id}
      onClick={(e) => h.openView(e, props.open, props.close)}
    >
      <i className={"fas fa-lg fa-fw " + props.ionIcon}></i>
      <span>{props.title}</span>
    </div>
  );
};

export default MainButton;
