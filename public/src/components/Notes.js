import React from "react";
import p from "../helpers/p";

const Notes = (props) => {
  return (
    <div id={p.appendID(props.id, "personNotes", "-")} className="personNotes">
      <div className="personNoteHeader">
        <i className="fas fa-plus-circle"></i>
        <div className="personNoteTitle">Notes</div>
      </div>
      <div className="personNotePreviews">
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
        <div className="personNotePreview">
          Here is where a brief preview of each note will appear, giving you an
          idea of what the note is about
        </div>
      </div>
    </div>
  );
};

export default Notes;
