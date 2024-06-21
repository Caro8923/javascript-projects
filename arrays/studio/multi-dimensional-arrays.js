let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

foodArray = food.split(',').sort();
equipmentArray = equipment.split(',').sort();
petsArray = pets.split(',').sort();
sleepAidsArray = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let selection = Number(input.question("Please enter a number 0 through 3."));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (selection < 0 || selection > 3) {
    console.log("Error. Invalid Number")
} else {
    console.log(`"Your selection is : ${cargoHold[selection]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let selection1 = Number(input.question("Please enter a number 0 through 3."))
let selection2 = (input.question("Please select a particular item in the cargoHold of your choice: "));

if (cargoHold[selection1].includes(selection2)) {
    console.log(`Cabinet ${selection1} DOES contain ${selection2}.`);
} else {
    console.log(`Cabinet ${selection1} DOES NOT contain ${selection2}.`);
}