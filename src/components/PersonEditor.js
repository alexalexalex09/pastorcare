import React from "react";
import Header from "./Header";
import p from "../helpers/p";

const PersonEditor = (props) => {
  return (
    <div className={p.appendID(props.className, "personEditor ", " ")}>
      <Header
        id={p.appendID(props.id, "personHeader", "-")}
        title="New Person"
        icon="save-outline"
      ></Header>
      <div className="viewBody">
        <div
          className="textGroup"
          id={p.appendID(props.id, "personTextGroup", "-")}
        >
          <div
            className="textInput"
            id={p.appendID(props.id, "personText", "-")}
          >
            <i className="fas fa-user"></i>
            <label htmlFor="personInput" className="off">
              Name
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Name"
              id={p.appendID(props.id, "personInput", "-")}
            />
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteTagText", "-")}
          >
            <i className="fas fa-gift"></i>
            <label htmlFor="birthdayInput" className="off">
              Birthday
            </label>
            <input
              className="noteInput"
              type="date"
              autoComplete="off"
              placeholder="Birthday"
              id={p.appendID(props.id, "birthdayInput", "-")}
            />
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <i className="fas fa-ring"></i>
            <label htmlFor="anniversaryInput" className="off">
              Anniversary
            </label>
            <input
              className="noteInput"
              type="date"
              autoComplete="off"
              placeholder="Anniversary"
              id={p.appendID(props.id, "anniversaryInput", "-")}
            />
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <i className="fas fa-briefcase"></i>
            <label htmlFor="occupationInput" className="off">
              Occupation
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Occupation"
              id={p.appendID(props.id, "occupationInput", "-")}
            />
            <div
              className="tagList"
              id={p.appendID(props.id, "occupationList", "-")}
            ></div>
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <i className="fas fa-project-diagram"></i>
            <label htmlFor="relationshipsInput" className="off">
              Relationships
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Relationships"
              id={p.appendID(props.id, "relationshipsInput", "-")}
            />
            <div
              className="tagList"
              id={p.appendID(props.id, "relationshipsList", "-")}
            ></div>
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <i className="fas fa-users"></i>
            <label htmlFor="groupsInput" className="off">
              Groups
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Groups"
              id={p.appendID(props.id, "groupsInput", "-")}
            />
            <div
              className="tagList"
              id={p.appendID(props.id, "groupsList", "-")}
            ></div>
          </div>
        </div>
        <div
          id={p.appendID(props.id, "personNotes", "-")}
          className="personNotes"
        >
          <div className="personNoteHeader">
            <i className="fas fa-plus-circle"></i>
            <div className="personNoteTitle">Notes</div>
          </div>
          <div className="personNotePreviews">
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
            <div className="personNotePreview">
              Here is where a brief preview of each note will appear, giving you
              an idea of what the note is about
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonEditor;
