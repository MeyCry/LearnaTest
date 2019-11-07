const _ = require('lodash');
const analyticSend = require('analytics');
const recognition = require('recognition');

const events = [[23, 23, 44], 43, 44, [321, 4]];

(function () {
  console.log(recognition('hello world'));
  analyticSend(_.flattenDeep(events));
})();
