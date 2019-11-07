const _ = require('lodash');

const arr = [1, 6, 3, 6, 44, 2];

function findIndex44(arr) {
  return _.findIndex(arr, item => item === 44);
}

function isMoreOrEqualThenZero(num) {
  return num >= 0;
}

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
      (...args) => nextFn(prevFn(...args)),
    value => value
  );

const checkMessage = compose(
  isMoreOrEqualThenZero,
  findIndex44
);
console.log('analytics run 2');

console.log(checkMessage(arr));

module.exports =  function analyticSend(message) {
  console.log(`Send: ${message}`);
};
