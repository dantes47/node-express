// /* GLOBALS >> NO WINDOW!!
//  *
//  * __dirname >> path to current directory
//  * __filename >> file name
//  * require >> function to use modules(CommonJS)
//  * module >> info about current module(file)
//  * process >> info about env. where the program is being executed
//  * */

// console.log(__dirname);

// setInterval(() => {
//   console.log('Show Me! every 1.3 sec.');
// }, 1300);

// CommonJS, every fila is a module by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require('./names');
const sayHi = require('./utils');
console.log(john, peter);

// alter.
const data = require('./alter-export');
require('./mind-grenade');

// sayHi('Lusy');
// // sayHi(names.john);
// // sayHi(names.peter);
// // or:
// sayHi(john);
// sayHi(peter);

// // alter output:
// sayHi(data.onePerson.name);
// sayHi(`${data.items[0]}, ${data.items[1]}`);

