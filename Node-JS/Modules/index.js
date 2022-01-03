const action = require('./add');
const obj = require('./arithmetic');

const {add,sub,mul} = require('./arithmetic')

//require is also a global

console.log(action(10,12));
console.log(obj);
//console.log(obj.sub(9,10));
console.log(__dirname);
