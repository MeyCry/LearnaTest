const sha1 = require('sha1');

module.exports = function (d) {
  console.log('recognize run');
  const r = sha1(d);
  console.log('recognize end');
  return r;
};
