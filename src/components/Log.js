import React from "react";
import NoteEditor from "../components/NoteEditor";

const Log = (props) => {
  return (
    <div className="log listItem">
      <div className="listItemHeading">Log Heading</div>
      <div className="listItemPreview">
        This is a preview of the log entry. Many interesting things will be
        included here
      </div>
      <NoteEditor
        className="off"
        title="Note about something important"
        id={props.id}
      />
    </div>
  );
};

export default Log;
