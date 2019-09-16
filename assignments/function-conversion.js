// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

var myFunction = fnc => fnc;
console.log(myFunction("Function was invoked"));

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

var anotherFunction = fnc => fnc;
anotherFunction("Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

var add = (param1, param2) => param1 + param2;
add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

var subtract = (param1, param2) => param1 -param2;
subtract(1, 2);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

nums = [1,2,3,4];
var triple = param1 => param1 * 3;
console.log(nums.map(triple));