import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import ReactDOM from "react-dom";
import "./App.css";
//import api from "./components/api";

//TODO: Add Auth so that we can assign logs to a user and get that user's logs

//Components
import Header from "./components/Header";
import NoteEditor from "./components/NoteEditor";
import PersonEditor from "./components/PersonEditor";
import Cloud from "./components/Cloud";
import MainButton from "./components/MainButton";
import Log from "./components/Log";
import EntryItem from "./components/EntryItem";
import Wrapper from "./components/Wrapper";
import LoginButton from "./components/LoginButton";

//Helpers
//import h from "./helpers/h";

function App() {
  const { isAuthenticated, logout } = useAuth0();
  //const [logs, setLogs] = useState([]);
  //useEffect(() => {}, []);
  if (!isAuthenticated) {
    return (
      <div className="App">
        <Wrapper>
          <LoginButton></LoginButton>
        </Wrapper>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Wrapper>
          <div className="view" id="homeView">
            <div id="churchImg" className="backgroundImg"></div>
            <Cloud id="cloudA"></Cloud>
            <Cloud id="cloudB"></Cloud>
            <Header
              id="homeHeader"
              title="LovingCare"
              icon="fa-sign-out-alt"
              onClick="logout()"
            ></Header>

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
                id="newCheckinIcon"
                ionIcon="fa-user-plus"
                title="Add New Person"
                open="personView"
                close="homeView"
              />
              <MainButton
                id="newNoteIcon"
                ionIcon="fa-plus-circle"
                title="Add New Note"
                open="noteView"
                close="homeView"
              />
            </div>
          </div>
          <div className="view off" id="logbookView">
            <Header
              id="logbookHeader"
              title="Logbook"
              icon="fa-filter"
            ></Header>
            <div className="viewBody">
              <div id="logbook">
                <Log
                  id="1"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="2"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="3"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="4"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="5"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="6"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="7"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="8"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="9"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
                <Log
                  id="10"
                  title="Log Heading"
                  content="Interesting content will go here"
                />
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
            <NoteEditor title="Edit Note" id="newNote"></NoteEditor>
          </div>
          <div className="view off" id="personView">
            <PersonEditor title="Edit Person"></PersonEditor>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
