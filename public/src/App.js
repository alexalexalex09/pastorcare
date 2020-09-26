import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import ReactDOM from "react-dom";
import "./App.css";
//import api from "./components/api";

//Components
import Header from "./components/Header";
import NoteEditor from "./components/NoteEditor";
import PersonEditor from "./components/PersonEditor";
import Cloud from "./components/Cloud";
import MainButton from "./components/MainButton";
import Log from "./components/Log";
import DirectoryItem from "./components/DirectoryItem";
import Wrapper from "./components/Wrapper";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import api from "./components/api";

//Helpers
//import h from "./helpers/h";
//import p from "./helpers/p";

function App() {
  const { isAuthenticated, logout } = useAuth0();
  const [logs, setLogs] = useState([
    {
      id: "1",
      title: "Log Heading",
      content: "Interesting content will go here",
    },
    {
      id: "2",
      title: "Log Heading",
      content: "Interesting content will go here",
    },
    {
      id: "3",
      title: "Log Heading",
      content: "Interesting content will go here",
    },
  ]);
  const [people, setPeople] = useState([
    {
      id: "1",
      name: "John Doe",
      phone: "123-456-7890",
      address: "123 Main St, Malvern, PA 19355",
    },
    {
      id: "2",
      name: "John Doe",
      phone: "123-456-7890",
      address: "123 Main St, Malvern, PA 19355",
    },
    {
      id: "3",
      name: "John Doe",
      phone: "123-456-7890",
      address: "123 Main St, Malvern, PA 19355",
    },
    {
      id: "4",
      name: "John Doe",
      phone: "123-456-7890",
      address: "123 Main St, Malvern, PA 19355",
    },
  ]);

  useEffect(() => {
    if (isAuthenticated) {
      api
        .getNotes({ owner: document.getElementById("auth0_sub").innerText })
        .then((response) => {
          //console.log(response.data);
          let logArray = [];
          response.data.forEach(function (e) {
            //console.log(e);
            logArray.push({
              id: e._id,
              title: e.content.substr(0, 50),
              content: e.content,
            });
          });
          setLogs(logArray);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated]);
  useEffect(() => {
    if (isAuthenticated) {
      api
        .getPeople({ owner: document.getElementById("auth0_sub").innerText })
        .then((response) => {
          console.log(response.data);
          let peopleArray = [];
          let occupations = [];
          let groups = [];
          let relationships = [];

          response.data.forEach(function (e) {
            if (e.occupations) {
              occupations = e.occupations.map((e) => {
                return { name: e.title };
              });
            }
            if (e.groups) {
              groups = e.groups.map((e) => {
                return { name: e.name };
              });
            }
            if (e.relationships) {
              relationships = e.relationships.map((e) => {
                return { person: e.person, relationship: e.relationship };
              });
            }
            peopleArray.push({
              id: e._id,
              name: e.firstName + " " + e.lastName,
              phone: e.phone || "",
              address: e.address || "",
              occupations: occupations || [],
              groups: groups || [],
              anniversary: e.anniversary || "",
              birthday: e.birthday || "",
              relationships: relationships || [],
            });
          });
          console.log(peopleArray);
          setPeople(peopleArray);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated]);

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
          <UserInfo></UserInfo>
          <div className="view" id="homeView">
            <div id="churchImg" className="backgroundImg"></div>
            <Cloud id="cloudA"></Cloud>
            <Cloud id="cloudB"></Cloud>
            <Header
              id="homeHeader"
              title="LovingCare"
              icon="fa-sign-out-alt"
              onClick={() => logout({ returnTo: window.location.origin })}
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
                {logs.map((e, i) => (
                  <Log
                    id={e.id}
                    title={e.title}
                    content={e.content}
                    key={i}
                  ></Log>
                ))}
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
                {people.map((e, i) => {
                  return <DirectoryItem {...e} key={i}></DirectoryItem>;
                })}
              </div>
              <div id="directoryAddNew"></div>
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
