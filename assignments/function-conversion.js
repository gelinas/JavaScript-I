// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myfunction = () => "Function was invoked!"
console.log(myfunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => param;
console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => param1 + param2;
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => param1 - param2;
console.log(subtract(1,2));

// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map(function (num) {
  return num * 3;
});
console.log(triple);

// // function expression syntax
// // const add = function(a,b) { 
// //  return a + b;
// // } 

// arrow function expression syntax
const add2 = (a,b) => { 
    return a + b;
   } 
   console.log(add2(2,4)) // 6 