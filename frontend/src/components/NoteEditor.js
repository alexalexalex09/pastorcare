import React from "react";
import Header from "./Header";
import CustomEditor from "./CustomEditor";
import p from "../helpers/p";

const NoteEditor = (props) => {
  return (
    <div className={p.appendID(props.className, "noteEditor", " ")}>
      <Header
        id={p.appendID(props.id, "noteHeader", "-")}
        title={props.title}
        icon="save-outline"
      ></Header>
      <div className="viewBody">
        <CustomEditor></CustomEditor>
        <div
          className="textGroup"
          id={p.appendID(props.id, "noteTextGroup", "-")}
        >
          <div
            className="textInput"
            id={p.appendID(props.id, "notePersonText", "-")}
          >
            <i className="fas fa-user"></i>
            <label htmlFor="personNameInput" className="off">
              Attach to Person
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Attach to Person"
              id={p.appendID(props.id, "personNameInput", "-")}
            />
            <div
              className="autocomplete"
              id={
                props.id
                  ? "personAutocomplete-" + props.id
                  : "personAutocomplete"
              }
            ></div>
          </div>
          <label
            htmlFor={p.appendID(props.id, "tagInput", "-")}
            className="off"
          >
            Tags
          </label>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteTagText", "-")}
          >
            <i className="fas fa-tags"></i>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Tags"
              id={p.appendID(props.id, "tagInput", "-")}
            />
            <div
              className="tagList"
              id={p.appendID(props.id, "tagList", "-")}
            ></div>
            <div
              className="autocomplete"
              id={p.appendID(props.id, "catAutocomplete", "-")}
            ></div>
          </div>
          <label htmlFor="noteDateInput" className="off">
            Date
          </label>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <i className="fas fa-calendar-alt"></i>
            <input
              className="noteInput"
              type="date"
              autoComplete="off"
              placeholder="Date"
              id={p.appendID(props.id, "noteDateInput", "-")}
            />
          </div>
        </div>
        <div id={p.appendID(props.id, "noteCheckGroup", "-")}>
          <div id={p.appendID(props.id, "emailSelf", "-")}>
            <input
              type="checkbox"
              id={p.appendID(props.id, "emailSelfCB", "-")}
            />
            <label htmlFor="emailSelfCB">Email to Myself</label>
          </div>
          <div id={p.appendID(props.id, "nextDay", "-")}>
            <input
              type="checkbox"
              id={p.appendID(props.id, "nextDayCB", "-")}
            />
            <label htmlFor="nextDayCB">Next day reminder</label>
          </div>
          <div id={p.appendID(props.id, "customReminder", "-")}>
            <input
              type="checkbox"
              id={p.appendID(props.id, "customReminderCB", "-")}
            />
            <label htmlFor="customReminderCB">Custom reminder</label>
          </div>
          <div id={p.appendID(props.id, "addToBio", "-")}>
            <input
              type="checkbox"
              id={p.appendID(props.id, "addToBioCB", "-")}
            />
            <label htmlFor="addToBioCB">Add to bio</label>
          </div>
        </div>
        <div className="editorSaveButton">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
