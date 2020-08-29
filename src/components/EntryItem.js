import React from "react";
import ParEditor from "./PersonEditor";

const EntryItem = (props) => {
  return (
    <div className="entryItem listItem">
      <div className="listItemHeading">John Doe</div>

      <div className="listItemPreview">
        <div className="entryItemPhone">123-456-7890</div>
        <div className="entryItemAddress">
          123 W Main St., Malvern, PA 19355
        </div>
        <ParEditor className="off" id={props.id} />
      </div>
    </div>
  );
};

export default EntryItem;
