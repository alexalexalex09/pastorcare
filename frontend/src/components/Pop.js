import React from "react";

/*
 *   id, title, icon
 *   need to learn how to use children in these things
 *   otherwise I can't pass the right params
 */
const Pop = (props) => {
  return (
    <div className="popContainer off" id={props.id + "Pop"}>
      <div className="blurBackground"></div>
      <div className="pop">{props.children}</div>
    </div>
  );
};

export default Pop;
