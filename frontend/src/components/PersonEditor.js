import React from "react";
import api from "./api";
import Header from "./Header";
import Input from "./Input";
import MultiInput from "./MultiInput.js";
import p from "../helpers/p";
import h from "../helpers/h";

const PersonEditor = (props) => {
  //Tests
  if (
    h.testFn({
      test: ["AB", "cd", "EFG", "hijk"],
      fn: parseName,
      expect: { firstName: "AB", middleName: "cd", lastName: "EFG hijk" },
    }).res
  ) {
    //bhncvconsole.log("Name parsing works");
  } else {
    throw new Error("Error parsing name");
  }
  //End Tests

  function addPerson() {
    const name = h.findID("personText").value.split(" ");
    const { firstName, middleName, lastName } = parseName(name);
    const birthday = h.findID("birthdayInput").value;
    const anniversary = h.findID("anniversaryInput").value;
    console.log("Children: ", h.sibling("#occupationInput", ".list").children);
    const occupations = p.getChildrenAsArray(
      h.sibling("#occupationInput", ".list").children
    );
    //const relationships = [];
    /*const relationships = p.getChildrenAsArray(
      h.sibling("#relationshipsInput", ".list").children
    );*/
    let arr = [];
    document
      .querySelectorAll("#personView .multiInputItems")
      .forEach(function (e) {
        arr.push({
          person: e.children[0].getElementsByTagName("input")[0].value,
          relationship: e.children[1].getElementsByTagName("input")[0].value,
        });
      });
    const relationships = arr;
    const groups = p.getChildrenAsArray(
      h.sibling("#groupsInput", ".list").children
    );
    const person = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      birthday: birthday,
      anniversary: anniversary,
      occupations: occupations,
      relationships: relationships,
      groups: groups,
    };
    console.log(person);
    api
      .addPerson(person)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   *
   *
   * @param {Array} nameArray
   */
  function parseName(nameArray) {
    if (!Array.isArray(nameArray)) return { err: "Not an array" };
    if (nameArray.length < 1) return { err: "Array length less than 1" };
    let firstName, middleName, lastName;
    switch (nameArray.length) {
      case 3:
        [firstName, middleName, lastName] = nameArray;
        break;
      case 2:
        [firstName, lastName] = nameArray;
        break;
      case 1:
        [firstName] = nameArray;
        break;
      default:
        firstName = nameArray[0];
        middleName = nameArray[1];
        lastName = nameArray.slice(2).join(" ");
        break;
    }
    return { firstName: firstName, middleName: middleName, lastName: lastName };
  }

  return (
    <div className={p.appendID(props.className, "personEditor ", " ")}>
      <Header
        id={p.appendID(props.id, "personHeader", "-")}
        title="New Person"
        icon="save-outline"
      ></Header>
      <div className="viewBody">
        <div
          className="textGroup"
          id={p.appendID(props.id, "personTextGroup", "-")}
        >
          <Input
            icon="fa-user"
            id={p.appendID(props.id, "personText", "-")}
            text="Name"
            default="Name"
            type="text"
            hideLabel="true"
            autoComplete="true"
            list="false"
          ></Input>
          <Input
            icon="fa-gift"
            id={p.appendID(props.id, "birthdayInput", "-")}
            text="Birthday"
            default="Birthday"
            type="date"
            hideLabel="true"
            autoComplete="false"
            list="false"
          ></Input>
          <Input
            icon="fa-ring"
            id={p.appendID(props.id, "anniversaryInput", "-")}
            text="Anniversary"
            default="Anniversary"
            type="date"
            hideLabel="true"
            autoComplete="false"
            list="false"
          ></Input>
          <Input
            icon="fa-briefcase"
            id={p.appendID(props.id, "occupationInput", "-")}
            text="Occupation"
            default="Occupation"
            type="text"
            hideLabel="true"
            autoComplete="false"
            list="true"
          ></Input>
          <MultiInput title="Relationships" list="true" id="relationshipInput">
            <Input
              icon="fa-user"
              id={p.appendID(props.id, "relationshipsPersonInput", "-")}
              text="Person"
              default="Person"
              type="text"
              hideLabel="true"
              autoComplete="false"
            ></Input>
            <Input
              icon="fa-project-diagram"
              id={p.appendID(props.id, "relationshipsRelInput", "-")}
              text="Relationship"
              default="Relationship"
              type="text"
              hideLabel="true"
              autoComplete="false"
            ></Input>
          </MultiInput>
          <Input
            icon="fa-users"
            id={p.appendID(props.id, "groupsInput", "-")}
            text="Groups"
            default="Groups"
            type="text"
            hideLabel="true"
            autoComplete="false"
            list="true"
          ></Input>
        </div>
        <div className="saveButton" onClick={addPerson}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PersonEditor;
