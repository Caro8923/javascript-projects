let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagle = {
   name: "Leroy",
   species: "beagle",
   mass: 14,
   age: 5,
   astronautID: 9,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "tardigrade",
   mass: .0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];


// Print out the relevant information about each animal

function crewReport(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

let crewArray=[];

for (i=0; i < crew.length; i++) {
   crewArray.push(crewReport(crew[i]))
}

console.log(crewArray);


// Start an animal race!

function fitnessTest(racers) {
   let results = [], numSteps, turns;

   for (let i=0; i < racers.length; i++) {
      numSteps = 0; 
      turns = 0;
   
      while (numSteps < 20){
         numSteps += racers[i].move();
         turns++;
      }

      results.push(`${racers[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results
}

console.log(fitnessTest(crew));





/*
Questions : 
    How to randomly pick a value from an array?
    Part 2 - stored in array like part 3 to make easier, but function only still prints one animal when used independently
    Why results = [], numSteps, turns

I created a function to anonomously randomly an astronaut ID

Questions : 

      How to randomly pick a value from an array?
               

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let objects = ["superChimpOne", "salamander", "chimpanzee", "beagle", "tardigrade"]

function assignAstronautID(animal) {
   for (i = 0; i < objects.length; i++) {
      animal["astronautID"] = numArray.splice(Math.floor(Math.random()*10 + 1), 1);
      console.log(animal["astronautID"]);
   }
   return animal["astronautID"];
}

assignAstronautID(objects);

Tests
tardigrade["astronautID"] = assignAstronautID(tardigrade);

console.log(tardigrade.astronautID);
*/
