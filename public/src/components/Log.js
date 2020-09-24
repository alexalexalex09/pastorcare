import React from "react";
import NoteEditor from "../components/NoteEditor";

const Log = (props) => {
  return (
    <div className="log listItem">
      <div className="listItemHeading">{props.title}</div>
      <div className="listItemPreview">{props.content}</div>
      <NoteEditor
        className="off"
        title={props.title}
        id={props.id}
        value={props.content}
      />
    </div>
  );
};

export default Log;
