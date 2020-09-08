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
  equals: equals,
};

module.exports = b;
