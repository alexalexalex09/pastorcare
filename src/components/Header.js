import React from "react";
import h from "../helpers/h";
import Menu from "./Menu";

const Header = (props) => {
  let extraIcon = <div className="extraIcon"></div>;
  if (props.icon) {
    extraIcon = (
      <div id={props.id + props.icon} className="extraIcon">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    );
  }
  return (
    <div className="header" id={props.id}>
      <div
        className="mainTitle"
        onClick={(e) =>
          h.openView(
            e,
            "homeView",
            h.notClass(h.findClass("view"), "off")[0].id
          )
        }
      >
        <span>{props.title}</span>
      </div>
      {extraIcon}
      <Menu></Menu>
    </div>
  );
};

export default Header;
