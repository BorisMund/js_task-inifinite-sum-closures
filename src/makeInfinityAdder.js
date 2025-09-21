'use strict';

/***
 
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  function makeAdder(...args) {
    if (args.length > 0) {
      count += args[0];

      return makeAdder;
    } else {
      const result = count;

      count = 0;

      return result;
    }
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
