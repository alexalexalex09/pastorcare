import React from "react";
import Header from "./Header";
import CustomEditor from "./CustomEditor";

const NoteEditor = (props) => {
  return (
    <div className={"noteEditor " + props.className}>
      <Header
        id={"noteHeader" + props.id}
        title={props.title}
        icon="save-outline"
      ></Header>
      <div className="viewBody">
        <CustomEditor></CustomEditor>
        <div className="textGroup" id={"noteTextGroup" + props.id}>
          <div className="textInput" id={"noteParText" + props.id}>
            <ion-icon name="person"></ion-icon>
            <label htmlFor="parNameInput" className="off">
              Attach to Parishioner
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Attach to Parishioner"
              id={"parNameInput" + props.id}
            />
            <div
              className="autocomplete"
              id={"parAutocomplete" + props.id}
            ></div>
          </div>
          <label htmlFor={"tagInput" + props.id} className="off">
            Tags
          </label>
          <div className="textInput" id={"noteTagText" + props.id}>
            <ion-icon name="pricetags-outline"></ion-icon>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Tags"
              id={"tagInput" + props.id}
            />
            <div
              className="autocomplete"
              id={"catAutocomplete" + props.id}
            ></div>
          </div>
          <label htmlFor="noteDateInput" className="off">
            Date
          </label>
          <div className="textInput" id={"noteDateText" + props.id}>
            <ion-icon name="calendar"></ion-icon>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Date"
              id={"noteDateInput" + props.id}
            />
          </div>
        </div>
        <div id={"noteCheckGroup" + props.id}>
          <div id={"emailSelf" + props.id}>
            <input type="checkbox" id={"emailSelfCB" + props.id} />
            <label htmlFor="emailSelfCB">Email to Myself</label>
          </div>
          <div id={"prayerRequest" + props.id}>
            <input type="checkbox" id={"prayerRequestCB" + props.id} />
            <label htmlFor="prayerRequestCB">Send as prayer request</label>
          </div>
          <div id={"nextDay" + props.id}>
            <input type="checkbox" id={"nextDayCB" + props.id} />
            <label htmlFor="nextDayCB">Next day reminder</label>
          </div>
          <div id={"nextMonday" + props.id}>
            <input type="checkbox" id={"nextMondayCB" + props.id} />
            <label htmlFor="nextMondayCB">Next Monday reminder</label>
          </div>
          <div id={"interaction" + props.id}>
            <input type="checkbox" id={"interactionCB" + props.id} />
            <label htmlFor="interactionCB">Log as interaction</label>
          </div>
          <div id={"addToBio" + props.id}>
            <input type="checkbox" id={"addToBioCB" + props.id} />
            <label htmlFor="addToBioCB">Add to bio</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
