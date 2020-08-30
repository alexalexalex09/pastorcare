import React from "react";
import h from "../helpers/h";
import Menu from "./Menu";

const Header = (props) => {
  let extraIcon = <div className="extraIcon"></div>;
  if (props.icon) {
    extraIcon = (
      <div id={props.id + props.icon} className="extraIcon">
        <i className={"fas " + props.icon}></i>
      </div>
    );
  }
  return (
    <div className="header" id={props.id}>
      <div
        className="homeButton backgroundImg"
        onClick={(e) =>
          h.openView(
            e,
            "homeView",
            h.notClass(h.findClass("view"), "off")[0].id
          )
        }
      ></div>
      <div className="mainTitle">
        <span>{props.title}</span>
      </div>
      {extraIcon}
      <Menu></Menu>
    </div>
  );
};

export default Header;
