// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 175000;
let marsDistanceKm = 225000000;
let moonDistanceKm = 84400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof marsDistanceKm)
console.log(typeof moonDistanceKm)
console.log(typeof milesPerKm)
// Calculate a space mission below
let milesToMars = marsDistanceKm * milesPerKm
let hoursToMars = milesToMars / shuttleSpeedMph
let daysToMars = hoursToMars / 24
// Print the results of the space mission calculations below
console.log(shuttleName + " will take" ,daysToMars + " days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = moonDistanceKm * milesPerKm
let hoursToMoon = milesToMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon / 24
// Print the results of the trip to the moon below
console.log(shuttleName + " will take" ,daysToMoon + " days to reach the Moon")
console.log('Coding Rocks')
let day = "Thursday";
day = 32.5;
day = 19; 
console.log(day);
console.log(2 ** 2 ** 3 * 3)
console.log(1 + 5 % 3)
