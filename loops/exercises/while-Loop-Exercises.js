//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelStart
let astronautNum
let altitude


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  const input = require("readline-sync");
  fuelStart = input.question("What is the starting fuel level?");
  fuelStart = Number(fuelStart);

  while (fuelStart <= 5000 || fuelStart >= 30000 || isNaN(fuelStart)) {
    fuelStart = input.question("Fuel level invalid. Please ensure starting level is between 5000 and 30000. What is the starting fuel level?:")
    fuelStart = Number(fuelStart)
  }
  


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  astronautNum = input.question("Enter the number of astronauts: ");
  astronautNum = Number(astronautNum);

  while (astronautNum <1 || astronautNum >7 || isNaN(astronautNum)) {
    astronautNum = input.question("Please ensure astronauts do not exceed 7. Enter the number of astronauts: ");
    astronautNum = Number(astronautNum)
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
altitude = 0
altitude = Number(altitude);

while (fuelStart-100*astronautNum >=0) {
  altitude += 50;
  fuelStart -= 100*astronautNum;
  altitude = Number(altitude);
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
 
console.log(`The shuttle gained an altitude of ${altitude}km.`);

if (altitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.")
}