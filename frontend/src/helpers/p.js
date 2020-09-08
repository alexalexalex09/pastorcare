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
    return Array.from(children).map((e) => e.innerText.toString());
  },
};

export default p;
