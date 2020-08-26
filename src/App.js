import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class Cloud extends React.Component {
  render() {
    return <div id={this.props.id} className="cloud backgroundImg"></div>;
  }
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    setTimeout(function () {
      el.classList.add("cloudMove");
    }, 100);
  }
}

function App() {
  return (
    <div className="App">
      <div className="view" id="homeView">
        <div id="churchImg" className="backgroundImg"></div>
        <Cloud id="cloudA"></Cloud>
        <Cloud id="cloudB"></Cloud>
        <div className="header" id="homeHeader">
          <div id="mainTitle">LovingCare</div>
          <div className="menuIcon icon">
            <ion-icon name="menu"></ion-icon>
          </div>
        </div>
        <div id="mainButtons">
          <div className="mainIcon icon" id="logBookIcon">
            <ion-icon name="book-outline"></ion-icon>
            <span>Logbook</span>
          </div>
          <div className="mainIcon icon" id="directoryIcon">
            <ion-icon name="people"></ion-icon>
            <span>Directory</span>
          </div>
          <div className="mainIcon icon" id="newNoteIcon">
            <ion-icon name="add-outline"></ion-icon>
            <span>Add New Note</span>
          </div>
          <div className="mainIcon icon" id="newParIcon">
            <ion-icon name="person-add"></ion-icon>
            <span>New Parishioner</span>
          </div>
        </div>
      </div>
      <div className="view off" id="logbookView">
        <div className="header" id="logbookHeader">
          <div id="logbookTitle">
            <span>Logbook</span>
          </div>
          <div className="logbookIcon icon" id="filterIcon"></div>
          <div className="menuIcon icon"></div>
        </div>
        <div id="logbook"></div>
      </div>
      <div className="view off" id="directoryView">
        <div className="header" id="directoryHeader">
          <div id="directoryTitle">
            <span>Directory</span>
          </div>
          <div className="menuIcon icon"></div>
        </div>
        <div id="directory"></div>
      </div>
      <div className="view off" id="noteView">
        <div className="header" id="noteHeader">
          <div id="noteTitle">New Note</div>
          <div className="saveIcon icon" id="noteSave"></div>
          <div className="menuIcon icon"></div>
        </div>
        <div id="noteEditor"></div>
        <div className="textGroup" id="noteTextGroup">
          <div className="textInput" id="noteParText">
            <ion-icon name="person"></ion-icon>
            <label htmlFor="parNameInput" className="off">
              Attach to Parishioner
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Attach to Parishioner"
              id="parNameInput"
            />
            <div className="autocomplete" id="parAutocomplete"></div>
          </div>
          <label htmlFor="tagInput" className="off">
            Tags
          </label>
          <div className="textInput" id="noteTagText">
            <ion-icon name="category"></ion-icon>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Tags"
              id="tagInput"
            />
            <div className="autocomplete" id="catAutocomplete"></div>
          </div>
          <label htmlFor="noteDateInput" className="off">
            Date
          </label>
          <div className="textInput" id="noteDateText">
            <ion-icon name="calendar"></ion-icon>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Date"
              id="noteDateInput"
            />
          </div>
        </div>
        <div id="noteCheckGroup">
          <div id="emailSelf">
            <input type="checkbox" id="emailSelfCB" />
            <label htmlFor="emailSelfCB">Email to Myself</label>
          </div>
          <div id="prayerRequest">
            <input type="checkbox" id="prayerRequestCB" />
            <label htmlFor="prayerRequestCB">Send as prayer request</label>
          </div>
          <div id="nextDay">
            <input type="checkbox" id="nextDayCB" />
            <label htmlFor="nextDayCB">Next day reminder</label>
          </div>
          <div id="nextMonday">
            <input type="checkbox" id="nextMondayCB" />
            <label htmlFor="nextMondayCB">Next Monday reminder</label>
          </div>
          <div id="interaction">
            <input type="checkbox" id="interactionCB" />
            <label htmlFor="interactionCB">Log as interaction</label>
          </div>
          <div id="addToBio">
            <input type="checkbox" id="addToBioCB" />
            <label htmlFor="addToBioCB">Add to bio</label>
          </div>
        </div>
      </div>
      <div className="view off" id="parView">
        <div className="header" id="parHeader">
          <div id="parTitle">New Parishioner</div>
          <div className="saveIcon icon" id="parSave"></div>
          <div className="menuIcon icon"></div>
        </div>
        <div className="textGroup" id="parTextGroup">
          <div className="textInput" id="parParText">
            <ion-icon name="person"></ion-icon>
            <label htmlFor="parInput" className="off">
              Name
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Name"
              id="parInput"
            />
          </div>
          <div className="textInput" id="noteTagText">
            <ion-icon name="calendar"></ion-icon>
            <label htmlFor="birthdayInput" className="off">
              Birthday
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Birthday"
              id="birthdayInput"
            />
          </div>
          <div className="textInput" id="noteDateText">
            <ion-icon name="calendar"></ion-icon>
            <label htmlFor="anniversaryInput" className="off">
              Anniversary
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Anniversary"
              id="anniversaryInput"
            />
          </div>
          <div className="textInput" id="noteDateText">
            <ion-icon name="person"></ion-icon>
            <label htmlFor="occupationInput" className="off">
              Occupation
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Occupation"
              id="occupationInput"
            />
          </div>
          <div className="textInput" id="noteDateText">
            <ion-icon name="category"></ion-icon>
            <label htmlFor="relationshipsInput" className="off">
              Relationships
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Relationships"
              id="relationshipsInput"
            />
          </div>
          <div className="textInput" id="noteDateText">
            <ion-icon name="category"></ion-icon>
            <label htmlFor="groupsInput" className="off">
              Groups
            </label>
            <input
              className="noteInput"
              type="text"
              autoComplete="off"
              defaultValue="Groups"
              id="groupsInput"
            />
          </div>
        </div>
        <div id="parNotes">
          <div id="parNoteHeader">
            <div id="addParNote">
              <ion-icon name="plus"></ion-icon>
            </div>
            <div id="parNoteTitle">Notes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
