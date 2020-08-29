const h = {
  findID: function (id) {
    return document.getElementById(id);
  },
  findClass: function (theClass) {
    return document.getElementsByClassName(theClass);
  },
  parent: function (id) {
    return document.getElementById(id).parentElement.nodeName;
  },
  notClass: function (htmlCollection, theClass) {
    //given an HTMLCollection, return an array of elements that don't have the given class
    let found = h.filterHTML(htmlCollection, (obj) => {
      return !obj.classList.contains(theClass);
    });
    return found;
  },
  filterHTML: function (htmlCollection, fn) {
    //filters an htmlCollection by passing each element to fn() and
    //only returning those elements for which fn returns true
    let found = [];
    for (let i = 0; i < htmlCollection.length; i++) {
      if (fn(htmlCollection[i])) {
        found.push(htmlCollection[i]);
      }
    }
    return found;
  },
  openView: function (e, open, close) {
    //open a view
    //e.preventDefault();
    const toOpen = h.findID(open);
    const toClose = h.findID(close);
    if (toOpen !== toClose) {
      toOpen.style.opacity = "0";
      toOpen.classList.remove("off");
      setTimeout(function () {
        toOpen.style.opacity = "1";
        toClose.style.opacity = "0";
        setTimeout(function () {
          toClose.classList.add("off");
        });
      }, 10);
    }
  },
};

export default h;
