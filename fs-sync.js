const { readFileSync, writeFileSync } = require('fs');
console.log('start');
// or >> // const fs = require('fs);
// fs.readFileSync..

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

const result = writeFileSync(
    './content/res-sync.txt',
    `Here is the result of: ${first}, and ${second}..`,
    { flag: 'a' }
);

console.log('done');
console.log('start another task');


