// local dependency - for usage in ONLY particular project
// npm i <packageName>

// global dependency - for usage in ANY project
// npm i -g <packageName>
// sudo npm install -g <packageName> (mac, linux)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello, Folks!');

let total = 0; counter = 1;
while(counter <= newItems.length) {
    total += counter;
    counter += 1;
}

console.log(total);