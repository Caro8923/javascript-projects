//Create an anonymous function and set it equal to a variable.

anonymous = function(parameter) {
    if (typeof parameter === "number") {
        parameter =  parameter*3;
    } else if (typeof parameter === "string") {
        parameter = "ARRR!";
    }
    return parameter;
};

console.log(anonymous("henry"));
console.log(anonymous(9));
console.log(anonymous(true));

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/



/* Part 2 Trial

anonTwo = function(data) {
    for (i=0; i < arrayOld.length; i++) {
        if (typeof data[i] === "number") {
            arrayNew[i] =  data[i]*3;
        } else if (typeof data[i] === "string") {
            arrayNew[i] = "ARRR!";
        } else {
            arrayNew[i] = data [i]
        }
    }
    return arrayNew;
};

console.log(arrayNew[2]);

(Above idea, does not work for part 2, why?)*/ 

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let mappedArray = arr.map(anonymous);

console.log(mappedArray);
