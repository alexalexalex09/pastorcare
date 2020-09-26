import React, { useState, useEffect } from "react";
import p from "../helpers/p";

const Input = (props) => {
  const propList = props.listItems || [];
  //console.log("props", props);
  const [listItems, setListItems] = useState(propList);
  const [newListItem, setNewListItem] = useState("");

  useEffect(() => {
    if (propList.length > 0) {
      setListItems(propList);
    }
  }, [propList]);

  const add = (listItem) => {
    if (listItems) {
      setListItems([...listItems, listItem]);
    } else {
      setListItems([listItem]);
    }
  };

  const remove = (index) => {
    if (listItems.length > 1) {
      setListItems([
        ...listItems.slice(0, index),
        ...listItems.slice(index + 1),
      ]);
    } else {
      setListItems([]);
    }
  };

  const handleKeyPress = (value) => {
    setNewListItem(value);
    //TODO: Customize this for better handling of splitting off tags
    if (
      props.list !== "true" ||
      value === "" ||
      value.substr(value.length - 1, 1) !== "," || //Look for a comma in the last position, if so, take the text as a string
      value.length < 2
    ) {
      return;
    }
    add({ name: value.slice(0, value.length - 1) });
    setNewListItem("");
  };

  return (
    <div className="inputField" id={props.id + "-field"}>
      <i className={"fas " + props.icon}></i>
      <label htmlFor={props.id} className={props.hideLabel && "off"}>
        {props.label}
      </label>
      <input
        className={props.className}
        type={props.type}
        autoComplete="off"
        placeholder={props.default}
        id={props.id}
        onChange={(e) => handleKeyPress(e.target.value)}
        value={newListItem}
      />
      {props.autoComplete && (
        <div
          className="autocomplete off"
          id={p.appendID(props.id, "autocomplete", "-")}
        ></div>
      )}
      <div className={props.list ? "list" : "off"}>
        {listItems.map((listItem, index) => {
          //console.log("displaying LI: ", listItem);
          return (
            <span key={index}>
              {listItem.name}
              <i
                className="far fa-times-circle"
                onClick={() => remove(index)}
              ></i>
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Input;
