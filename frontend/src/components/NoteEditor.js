import React from "react";
import Header from "./Header";
import CustomEditor from "./CustomEditor";
import Input from "./Input";
import CheckedField from "./CheckedField";
import p from "../helpers/p";

const NoteEditor = (props) => {
  return (
    <div
      className={p.appendID(props.className, "noteEditor", " ")}
      id={props.id}
    >
      <Header title={props.title} icon="save-outline"></Header>
      <div className="viewBody">
        <CustomEditor></CustomEditor>
        <div className="textGroup">
          <Input
            icon="fa-user"
            id={p.appendID(props.id, "personNameInput", "-")}
            text="Attach to Person"
            type="text"
            hideLabel="true"
            autoComplete="true"
            list="true"
          ></Input>
          <div id="personList"></div>
          <Input
            icon="fa-tags"
            id={p.appendID(props.id, "noteTagText", "-")}
            text="Tags"
            type="text"
            hideLabel="true"
            autoComplete="true"
            list="true"
          ></Input>
          <div id="tagList"></div>
          <Input
            icon="fa-calendar-alt"
            id={p.appendID(props.id, "noteDateInput", "-")}
            text="Date"
            type="date"
            hideLabel="true"
            autoComplete="false"
          ></Input>
        </div>
        <CheckedField title="Check in?" childID="checkinDate">
          <Input
            icon="fa-calendar-alt"
            id={p.appendID(props.id, "checkinDateInput", "-")}
            text="Date"
            type="date"
            hideLabel="true"
            autoComplete="false"
          ></Input>
        </CheckedField>
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
          <CheckedField
            title="Custom Reminder"
            childID={p.appendID(props.id, "customReminder", "-")}
          >
            <Input
              icon="fa-calendar-alt"
              id={p.appendID(props.id, "customReminderInput", "-")}
              text="Date"
              type="datetime-local"
              hideLabel="true"
              autoComplete="false"
            ></Input>
          </CheckedField>

          <div id={p.appendID(props.id, "addToBio", "-")}>
            <input
              type="checkbox"
              id={p.appendID(props.id, "addToBioCB", "-")}
            />
            <label htmlFor="addToBioCB">Add to bio</label>
          </div>
        </div>
        <div className="saveButton">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
