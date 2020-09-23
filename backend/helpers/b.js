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

const b = {
  /**
   *
   *
   * @param {Object} params {test: test input for fn, fn: function to test, expect: expected result, err: custom error message, success: custom success message}
   * @returns
   */
  testFn: function (par) {
    const res = par.fn.apply(this, par.test);
    par.err = par.err || "Error";
    const err = par.err + ": " + JSON.stringify(res);
    return {
      res: b.equals(res, par.expect),
      err: err,
      success: par.success || undefined,
    };
  },
  testAllFn: function (tests) {
    let res,
      pass = 0;
    for (let i = 0; i < tests.length; i++) {
      res = b.testFn(tests[i]);
      if (res.res) {
        pass++;
      } else {
        console.log("Error: ", res.err);
      }
    }
    return "Passed " + pass + " of " + tests.length + " tests";
  },
  /**
   *
   *
   * @param {*} item add this to array if exists
   * @param {object} curObj the object to which <item> should be added
   * @param {string} key the property under which <item> should be added
   * @returns modified object with or without new key
   */
  checkAndAdd: function (item, curObj, field) {
    //console.log(field, " item: ", item);
    if (item) {
      if (Array.isArray(item)) {
        curObj = this.checkAndAddArray(item, curObj, field);
      } else {
        curObj[field] = item;
      }
      //console.log(field, " update: ", curObj[field]);
    }
    //console.log("returning: ", curObj);
    return curObj;
  },
  /**
   *
   *
   * @param {*} item add this to array if exists
   * @param {object} curObj the object to which <item> should be added
   * @param {string} field the property under which <item> should be added
   * @returns modified object with or without new key
   */
  checkAndAddArray: function (item, curObj, field) {
    if (item) {
      if (!curObj[field]) {
        curObj[field] = [];
      }
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          curObj[field].push(item[key]);
        }
      }
    }
    return curObj;
  },
  /**
   *
   *
   * @param {Array} arr Array of strings to convert to objects
   * @param {String} field Optional: Field to assign strings to, defaults to index
   * @returns {Array} Array of objects
   */
  stringArrayToObject: function (arr, field) {
    if (arr && Array.isArray(arr) && typeof arr[0] === "string") {
      arr = arr.map((e, i) => {
        var res = {};
        if (field) {
          // if the user provided a field, map an object with the designated field name
          res[field] = e;
        } else {
          //otherwise, map an object with the original index of the element. This is for
          //situations where the name of the field doesn't matter. The result is that the
          //result for an array [el0, el1, el2] will be [{0: el0}, {1: el1}, {2: el2}]
          res[i] = e;
        }
        return res;
      });
    }
    return arr;
  },
  equals: equals,
};

module.exports = b;
