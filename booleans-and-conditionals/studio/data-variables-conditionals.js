// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "Ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelcius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = 100
let weatherStatus = "clear"
let preparedForLiftoff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount => 7) {
    console.log ("Astronaut count: " + astronautCount);
}

// add logic below to verify all astronauts are ready
if (astronautStatus == "Ready") {
    console.log ("Astronauts are ready!");
} else {
    console.log ("Astronauts are not ready!");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000 ) {
    console.log("Total Mass: " + totalMassKg + "kg");
} else {
    console.log("Too heavy!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius > minimumFuelTemp && fuelTempCelcius < maximumFuelTemp) {
    console.log ("Fuel Temperature: " + fuelTempCelcius);
} else {
    console.log("Check the fuel temperatures.");
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel == 100) {
    console.log ("Fuel level: " + fuelLevel + "%");
} else {
    console.log ("Add more fuel");
}

// add logic below to verify the weather status is clear
if (weatherStatus == "clear") {
    console.log("Weather status: " + weatherStatus);
}
// Verify shuttle launch can proceed based on above conditions
console.log ("Crew Mass: " + crewMassKg + "kg" + '\n' +
"Fuel Mass: " + fuelMassKg + "kg" + '\n' +
"Shuttle Mass: " + shuttleMassKg + "kg" + '\n' +
"Date: " + date + '\n' +
"Time: " + time + '\n' + 
"Have a safe flight!")