const p = {
  appendID: function (toAppend, id, separator) {
    if (typeof separator === "undefined") {
      separator = "";
    }
    return toAppend ? id + separator + toAppend : id;
  },
};

export default p;
