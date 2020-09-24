import React, { useState } from "react";

const MultiInput = (props) => {
  /*const [listItems, setListItems] = useState([]);*/
  const [fields, setFields] = useState(1);
  //const [newListItem, setNewListItem] = useState("");
  /*
  const add = (listItem) => {
    if (listItems) {
      setListItems([...listItems, listItem]);
    } else {
      setListItems([listItem]);
    }
  };

  const listRemove = (index) => {
    if (listItems.length > 1) {
      setListItems([
        ...listItems.slice(0, index),
        ...listItems.slice(index + 1),
      ]);
    } else {
      setListItems([]);
    }
  };

  const handleListSave = (target) => {
    const items = target.parentElement.children;
    let result = {};
    if (items.length < 1) return;
    for (let i = 0; i < items.length; i++) {
      result[i] = items[i];
    }
    console.log("list: ", props.list);
    add(result);
  };
*/
  const inputs = [];
  for (let i = 0; i < fields; i++) {
    inputs.push(
      <div className="multiInputItems" key={i}>
        {props.children}
      </div>
    );
  }

  return (
    <div className="multiInputField" id={props.id}>
      <div>{props.title}</div>
      {inputs}
      <div className="multiInputSave" onClick={() => setFields(fields + 1)}>
        Add Another
      </div>
    </div>
  );
};

export default MultiInput;
