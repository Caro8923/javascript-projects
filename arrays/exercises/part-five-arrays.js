let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
//The purpose of the parameter is to determine the start and end points of each new string inside the new array.

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
//The purpose of the parameter is to be the "connector" that joins the elements of an array into a string.

//3) Do split or join change the original string/array?

console.log(str);
console.log(arr);
//Split and join do not change the original string or array.


//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

cargoHoldArr = (cargoHold.split(','));
console.log(cargoHoldArr);

console.log(cargoHoldArr.sort());

let cargoHoldNew = cargoHoldArr.join(', ');
console.log(cargoHoldNew);

//METHOD CHAINING BELOW

console.log(cargoHold.split(',').sort().join(', '));