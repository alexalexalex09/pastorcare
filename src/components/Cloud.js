import React from "react";
import h from "../helpers/h";

/* Const because the function doesn't change. It accepts all properties in the JSX    */
const Cloud = (props) => {
  /* You can include whatever functions you'd like within the component as normal       */
  const startClouds = function () {
    setTimeout(function () {
      const clouds = h.findClass("cloud");
      for (var i = 0; i < clouds.length; i++) {
        clouds[i].classList.add("cloudMove");
      }
    }, 100);
  };
  /* You can also add event listeners as usual */
  window.addEventListener("onload", startClouds());
  /* Just return JSX to render. I think you can enclose multiple elements in a fragment? */
  return <div id={props.id} className="cloud backgroundImg"></div>;
};

export default Cloud;
