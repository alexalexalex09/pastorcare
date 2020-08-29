import React from "react";
import Header from "./Header";

const PersonEditor = (props) => {
  return (
    <div className={"personEditor " + props.className}>
      <Header
        id={"personHeader" + props.id}
        title="New Person"
        icon="save-outline"
      ></Header>
      <div className="viewBody">
        <div className="textGroup" id={"personTextGroup" + props.id}>
          <div className="textInput" id={"personText" + props.id}>
            <ion-icon name="person"></ion-icon>
            <label htmlFor="personInput" className="off">
              Name
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Name"
              id={"personInput" + props.id}
            />
          </div>
          <div className="textInput" id={"noteTagText" + props.id}>
            <ion-icon name="gift-outline"></ion-icon>
            <label htmlFor="birthdayInput" className="off">
              Birthday
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Birthday"
              id={"birthdayInput" + props.id}
            />
          </div>
          <div className="textInput" id={"noteDateText" + props.id}>
            <ion-icon name="rose-outline"></ion-icon>
            <label htmlFor="anniversaryInput" className="off">
              Anniversary
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Anniversary"
              id={"anniversaryInput" + props.id}
            />
          </div>
          <div className="textInput" id={"noteDateText" + props.id}>
            <ion-icon name="briefcase-outline"></ion-icon>
            <label htmlFor="occupationInput" className="off">
              Occupation
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Occupation"
              id={"occupationInput" + props.id}
            />
          </div>
          <div className="textInput" id={"noteDateText" + props.id}>
            <ion-icon name="git-merge-outline"></ion-icon>
            <label htmlFor="relationshipsInput" className="off">
              Relationships
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Relationships"
              id={"relationshipsInput" + props.id}
            />
          </div>
          <div className="textInput" id={"noteDateText" + props.id}>
            <ion-icon name="color-filter-outline"></ion-icon>
            <label htmlFor="groupsInput" className="off">
              Groups
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Groups"
              id={"groupsInput" + props.id}
            />
          </div>
        </div>
        <div id={"personNotes" + props.id}>
          <div id={"personNoteHeader" + props.id}>
            <div id={"addPersonNote" + props.id}>
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div id={"personNoteTitle" + props.id}>Notes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonEditor;
