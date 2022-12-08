// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget"); 
    div.innerHTML = 
    `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>
    `;
}

function validateInput(userInput) {
    let letters = /^[A-Za-z]+$/;   
    if (userInput === ""){
        console.log("empty");
        return "Empty";        
    }    
    else if(userInput.match(letters)){
        console.log("its alphabets");
        return "Is alphabets";
    }
    else if(isNaN(userInput)){
        console.log("its non-numeric");
        return "Not a Number";       
    } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    console.log("inside form submission...")

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   

    if(fuelLevel<10000){
        list.style.setProperty("visibility", "visible"); 
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.setProperty("color","red");
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
    }

    if(cargoLevel>10000){
        list.style.setProperty("visibility", "visible"); 
        cargoStatus.innerHTML = `Cargo mass too high for launch`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.setProperty("color","red");
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }

    if(fuelLevel>=10000 && cargoLevel<=10000){
        list.style.setProperty("visibility", "visible");       
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.setProperty("color","green");
    }
   
       
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {        
    return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    console.log(index);
    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;



