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
      <div className="pop">
        <div className="popTitle">{props.title}</div>
        <div className="textInput" id="checkinPeople">
          <i className={"fas " + props.icon}></i>
          <label htmlFor="peopleInput" className="off">
            People
          </label>
          <input
            className="checkinInput"
            type="text"
            autoComplete="off"
            placeholder="Add People"
            id="peopleInput"
          />
        </div>
        <div className="textInput" id="checkinNote">
          <i className={"fas " + props.icon}></i>
          <label htmlFor="noteInput" className="off">
            People
          </label>
          <input
            className="checkinInput"
            type="text"
            autoComplete="off"
            placeholder="Add a Note"
            id="noteInput"
          />
        </div>
      </div>
      <div className="dateInput" id="checkinDate">
        <i className={"fas " + props.icon}></i>
        <label htmlFor="dateInput" className="off">
          People
        </label>
        <input
          className="checkinInput"
          type="date"
          autoComplete="off"
          placeholder="Add People"
          id="dateInput"
        />
      </div>
    </div>
  );
};

export default Pop;
