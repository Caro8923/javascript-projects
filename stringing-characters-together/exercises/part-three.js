//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

let newLanguage = language.slice(0,1) + language.slice(4,5)
console.log(newLanguage)

//2. Without using slice(), use method chaining to accomplish the same thing.

let initials = language.charAt(0).concat(language.charAt(4));
console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for ${language} is ${initials}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let justForFun = language.toUpperCase().replace("JAVA", "coffee").slice(0,6);
console.log(justForFun)

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let realTitleCase = notTitleCase.replace("t","T").replace("c", "C");
console.log(realTitleCase)
