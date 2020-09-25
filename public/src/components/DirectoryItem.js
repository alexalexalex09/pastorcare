import React from "react";
import PersonEditor from "./PersonEditor";

const DirectoryItem = (props) => {
  return (
    <div className="directoryItem listItem">
      <div
        className="listItemHeading"
        onClick={(e) =>
          e.target.parentElement
            .querySelector(".personEditor")
            .classList.remove("off")
        }
      >
        {props.name}
      </div>

      <div className="listItemPreview">
        <div className="directoryItemPhone">{props.phone}</div>
        <div className="directoryItemAddress">{props.address}</div>
        <PersonEditor
          className="off"
          id={props.id}
          name={props.name}
          occupations={props.occupations}
          phone={props.phone}
          address={props.address}
          groups={props.groups}
          birthday={props.birthday}
          anniversary={props.anniversary}
        />
      </div>
    </div>
  );
};

export default DirectoryItem;
