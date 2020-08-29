import React from "react";
import Header from "./Header";
import p from "../helpers/p";

const PersonEditor = (props) => {
  return (
    <div className={p.appendID(props.className, "personEditor ", "-")}>
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
            <ion-icon name="person"></ion-icon>
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
            <ion-icon name="gift-outline"></ion-icon>
            <label htmlFor="birthdayInput" className="off">
              Birthday
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Birthday"
              id={p.appendID(props.id, "birthdayInput", "-")}
            />
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <ion-icon name="rose-outline"></ion-icon>
            <label htmlFor="anniversaryInput" className="off">
              Anniversary
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              placeholder="Anniversary"
              id={p.appendID(props.id, "anniversaryInput", "-")}
            />
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <ion-icon name="briefcase-outline"></ion-icon>
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
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <ion-icon name="git-merge-outline"></ion-icon>
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
          </div>
          <div
            className="textInput"
            id={p.appendID(props.id, "noteDateText", "-")}
          >
            <ion-icon name="color-filter-outline"></ion-icon>
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
          </div>
        </div>
        <div
          id={p.appendID(props.id, "personNotes", "-")}
          className="personNotes"
        >
          <div className="personNoteHeader">
            <ion-icon name="add-circle-outline"></ion-icon>
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
