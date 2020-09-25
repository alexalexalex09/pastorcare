import React, { useState } from "react";
import Header from "./Header";
import CustomEditor from "./CustomEditor";
import Input from "./Input";
import CheckedField from "./CheckedField";
import p from "../helpers/p";
import h from "../helpers/h";
import api from "./api";
import { useAuth0 } from "@auth0/auth0-react";

/**
 *
 *
 * @param {Remirror Element} content takes (this) and returns a
 * @returns {String} string with paragraphs separated by \r\n
 */
function processRemirror(e) {
  let res = "";
  const content = e.state.doc.content.content;
  content.forEach((e) => {
    if (e.content.content[0]) {
      res += e.content.content[0].text + "\r\n";
    } else {
      return "";
    }
  });

  return res;
}

const NoteEditor = (props) => {
  const [text, setText] = useState();
  if (
    h.testFn({
      test: {
        state: {
          doc: {
            content: {
              content: [{ content: { content: [{ text: "hi" }] } }],
            },
          },
        },
      },
      fn: processRemirror,
      expect: `hi\r\n`,
    }).res
  ) {
    //console.log("Note parsing works");
  } else {
    throw new Error("Error parsing note");
  }

  function addNote(e) {
    const el = e.target.parentElement.parentElement;
    const tags = Array.from(
      el.querySelectorAll("#noteTagText-newNote-field .list span")
    ).map((e) => e.innerText);
    const date = el.querySelectorAll("#noteDateInput-newNote-field input")[0]
      .value;
    const people = Array.from(
      el.querySelectorAll("#personNameInput-newNote-field .list span")
    ).map((e) => e.innerText);
    const note = {
      title: "",
      content: text,
      tags: tags,
      date: date,
      people: people,
      owner: document.getElementById("auth0_sub").innerText,
    };
    api
      .addNote(note)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onChangeHandler(e) {
    //console.log(e);
    setText(processRemirror(e));
  }

  const { user } = useAuth0();
  return (
    <div
      className={p.appendID(props.className, "noteEditor", " ")}
      id={props.id}
    >
      <Header title={props.title} icon="save-outline"></Header>
      <div className="viewBody">
        <CustomEditor onChangeHandler={onChangeHandler}></CustomEditor>
        <div className="off userinfo">{user.sub}</div>
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
        <div className="saveButton" onClick={addNote}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
