const equals = function (x, y) {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false;
  }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y;
  }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) {
    return x === y;
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return false;
  }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }

  // recursive object equality check
  var p = Object.keys(x);
  return (
    Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1;
    }) &&
    p.every(function (i) {
      return equals(x[i], y[i]);
    })
  );
};

const h = {
  findOne: function (query) {
    return document.querySelectorAll(query);
  },
  findID: function (id) {
    return document.getElementById(id);
  },
  findClass: function (theClass) {
    return document.getElementsByClassName(theClass);
  },
  parent: function (id) {
    return document.getElementById(id).parentElement;
  },
  sibling: function (find, withSibling) {
    try {
      return document
        .querySelectorAll(find)
        .parentElement.querySelectorAll(withSibling);
    } catch {
      return document.querySelectorAll(find);
    }
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

  /**
   *
   *
   * @param {Object} params {test: test input for fn, fn: function to test, expect: expected result, err: custom error message, success: custom success message}
   * @returns
   */
  testFn: function (par) {
    const resultContent = par.fn(par.test);
    return {
      res: h.equals(resultContent, par.expect),
      err: (par.err, ": ", resultContent) || "Error",
      success: par.success || undefined,
      resultContent: resultContent,
      expect: par.expect,
    };
  },
  equals: equals,
};

export default h;
