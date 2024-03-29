// Write your JavaScript code here!


window.addEventListener("load", function() {

   let form = document.querySelector("form");
   let pilot = document.querySelector("input[name='pilotName']");
   let copilot = document.querySelector("input[name='copilotName']");
   let fuelLevel = document.querySelector("input[name='fuelLevel']");
   let cargoMass = document.querySelector("input[name='cargoMass']");
   let faultyItems = document.getElementById("faultyItems");
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })


   form.addEventListener("submit", function(event){
        
        console.log("clicked submit");
        let validatePilot = validateInput(pilot.value);
        let validateCopilot= validateInput(copilot.value);
        let validateFuel = validateInput(fuelLevel.value);
        let validateCargoMass = validateInput(cargoMass.value);

        if (validatePilot === "Empty" || validateCopilot === "Empty" ||
        validateFuel === "Empty" || validateCargoMass === "Empty"){
        alert("All fields are required!");  
        event.preventDefault();
        }

        else if(validatePilot !== "Is alphabets" || validateCopilot !== "Is alphabets" || 
        validateFuel === "Is alphabets" || validateFuel === "Not a Number" || 
        validateCargoMass === "Is alphabets" || validateCargoMass === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
        }

        else {
        formSubmission(document, faultyItems, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
        event.preventDefault();
    }
        
        
   });


   
});