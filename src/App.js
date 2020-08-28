import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";

//Components
import Header from "./components/Header";

//Helpers
import h from "./helpers/h";

/*Example Functional Component*/
/* Const because the function doesn't change. It accepts all properties in the JSX    */
const Cloud = (props) => {
  /* You can include whatever functions you'd like within the component as normal       */
  const startClouds = function () {
    setTimeout(function () {
      const clouds = h.findClass("cloud");
      for (var i = 0; i < clouds.length; i++) {
        clouds[i].classList.add("cloudMove");
      }
    }, 100);
  };
  /* You can also add event listeners as usual */
  window.addEventListener("onload", startClouds());
  /* Just return JSX to render. I think you can enclose multiple elements in a fragment? */
  return <div id={props.id} className="cloud backgroundImg"></div>;
};

const MainButton = (props) => {
  return (
    <div
      className="mainButton icon"
      id={props.id}
      onClick={(e) => h.openView(e, props.open, props.close)}
    >
      <ion-icon name={props.ionIcon}></ion-icon>
      <span>{props.title}</span>
    </div>
  );
};

const NoteEditor = (props) => {
  return (
    <div className={"noteEditor " + props.className}>
      <Header
        id={"noteHeader" + props.id}
        title={props.title}
        icon="save-outline"
      ></Header>
      <div className="viewBody">
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

const ParEditor = (props) => {
  return (
    <div className="parEditor">
      <Header
        id={"parHeader" + props.id}
        title="New Parishioner"
        icon="save-outline"
      ></Header>
      <div className="viewBody">
        <div className="textGroup" id={"parTextGroup" + props.id}>
          <div className="textInput" id={"parParText" + props.id}>
            <ion-icon name="person"></ion-icon>
            <label htmlFor="parInput" className="off">
              Name
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Name"
              id={"parInput" + props.id}
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
        <div id={"parNotes" + props.id}>
          <div id={"parNoteHeader" + props.id}>
            <div id={"addParNote" + props.id}>
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div id={"parNoteTitle" + props.id}>Notes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Log = (props) => {
  return (
    <div className="log">
      <div className="logHeading">Log Heading</div>
      <div className="logPreview">
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

function App() {
  return (
    <div className="App">
      <div className="view" id="homeView">
        <div id="churchImg" className="backgroundImg"></div>
        <Cloud id="cloudA"></Cloud>
        <Cloud id="cloudB"></Cloud>
        <Header id="homeHeader" title="LovingCare"></Header>

        <div id="mainButtons">
          <MainButton
            id="logBookIcon"
            ionIcon="book-outline"
            title="Logbook"
            open="logbookView"
            close="homeView"
          />
          <MainButton
            id="directoryIcon"
            ionIcon="people"
            title="Directory"
            open="directoryView"
            close="homeView"
          />
          <MainButton
            id="newNoteIcon"
            ionIcon="add-outline"
            title="Add New Note"
            open="noteView"
            close="homeView"
          />
          <MainButton
            id="newParIcon"
            ionIcon="person-add"
            title="New Parishioner"
            open="parView"
            close="homeView"
          />
        </div>
      </div>
      <div className="view off" id="logbookView">
        <Header
          id="logbookHeader"
          title="Logbook"
          icon="funnel-outline"
        ></Header>
        <div className="viewBody">
          <div id="logbook">
            <Log id="1" />
            <Log id="2" />
            <Log id="3" />
            <Log id="4" />
            <Log id="5" />
            <Log id="6" />
          </div>
        </div>
      </div>
      <div className="view off" id="directoryView">
        <Header id="directoryHeader" title="Directory"></Header>
        <div className="viewBody">
          <div id="directory">Directory Entries</div>
        </div>
      </div>
      <div className="view off" id="noteView">
        <NoteEditor title="New Note"></NoteEditor>
      </div>
      <div className="view off" id="parView">
        <ParEditor title="New Parishioner"></ParEditor>
      </div>
    </div>
  );
}

export default App;
