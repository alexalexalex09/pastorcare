const p = {
  appendID: function (toAppend, id, separator) {
    if (typeof separator === "undefined") {
      separator = "";
    }
    return toAppend ? id + separator + toAppend : id;
  },
  getChecked: function (id, def) {
    let el = document.getElementById(id);
    if (el) {
      return el.checked;
    } else {
      return def;
    }
  },
  getChildrenAsArray: function (children) {
    if (typeof children !== "undefined" && children.length > 0) {
      return Array.from(children).map((e) => e.innerText.toString());
    } else {
      return [];
    }
  },
};

export default p;
