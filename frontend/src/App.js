import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";

//Components
import Header from "./components/Header";
import NoteEditor from "./components/NoteEditor";
import PersonEditor from "./components/PersonEditor";
import Cloud from "./components/Cloud";
import MainButton from "./components/MainButton";
import Log from "./components/Log";
import EntryItem from "./components/EntryItem";
import Pop from "./components/Pop";

//Helpers
//import h from "./helpers/h";

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
            ionIcon="fa-book"
            title="Logbook"
            open="logbookView"
            close="homeView"
          />
          <MainButton
            id="directoryIcon"
            ionIcon="fa-user"
            title="Directory"
            open="directoryView"
            close="homeView"
          />
          <MainButton
            id="newNoteIcon"
            ionIcon="fa-plus-circle"
            title="Add New Note"
            open="noteView"
            close="homeView"
          />
          <MainButton
            id="newCheckinIcon"
            ionIcon="fa-user-check"
            title="Check In"
            open="checkinPop"
            close="homeView"
          />
        </div>
      </div>
      <div className="view off" id="logbookView">
        <Header id="logbookHeader" title="Logbook" icon="fa-filter"></Header>
        <div className="viewBody">
          <div id="logbook">
            <Log id="1" />
            <Log id="2" />
            <Log id="3" />
            <Log id="4" />
            <Log id="5" />
            <Log id="6" />
            <Log id="7" />
            <Log id="8" />
            <Log id="9" />
            <Log id="10" />
          </div>
        </div>
      </div>
      <div className="view off" id="directoryView">
        <Header
          id="directoryHeader"
          title="Directory"
          icon="fa-search"
        ></Header>
        <div className="viewBody">
          <div id="directory">
            <EntryItem id="1" />
            <EntryItem id="2" />
            <EntryItem id="3" />
            <EntryItem id="4" />
            <EntryItem id="5" />
            <EntryItem id="6" />
            <EntryItem id="7" />
            <EntryItem id="8" />
            <EntryItem id="9" />
            <EntryItem id="10" />
          </div>
        </div>
      </div>
      <div className="view off" id="noteView">
        <NoteEditor title="New Note" id="newNote"></NoteEditor>
      </div>
      <div className="view off" id="personView">
        <PersonEditor title="New Person"></PersonEditor>
      </div>
      <Pop></Pop>
    </div>
  );
}

export default App;
