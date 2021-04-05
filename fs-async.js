const { readFile, writeFile } = require('fs');
console.log('start');
// readFile('./content/first.txt', 'utf8', (err, res) => {
//     console.log(err ? err : res);
// });

// readFile('./content/second.txt', 'utf8', (err, res) => {
//     console.log(err ? err : res);
// });

// or:

readFile('./content/first.txt', 'utf8', (err, res) => {
    console.log(err ? err : res);
    const first = res;

    readFile('./content/second.txt', 'utf8', (err, res) => {
        console.log(err ? err : res);
        const second = res;

        writeFile('./content/res-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, res) => console.log(err ? err : res) );
            console.log('done');
    });
});
console.log('start next task');