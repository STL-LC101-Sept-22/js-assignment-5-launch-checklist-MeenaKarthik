// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

    pilotStatus.innerHTML = `${pilot} Ready`;
    copilotStatus.innerHTML = `${copilot} Ready`;
    list.style.setProperty("visibility", "visible"); 

    if(fuelLevel<10000){
        fuelStatus.innerHTML = `Fuel level not enough for launch`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.setProperty("color","red");
    } else {
        fuelStatus.innerHTML = `Fuel level is good enough for launch`;
    }

    if(cargoLevel>10000){
        cargoStatus.innerHTML = `Cargo mass very high for launch`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.setProperty("color","red");
    } else {
        cargoStatus.innerHTML = `Cargo mass is good enough for launch`;
    }

    if(fuelLevel>=10000 && cargoLevel<10000){
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.setProperty("color","green");
    }
   
       
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       
    console.log(response);
        
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;



