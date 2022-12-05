// Write your JavaScript code here!

const formSubmission = require('./scriptHelper.js');
const validateInput = require('./scriptHelper.js');



window.addEventListener("load", function() {

   let form = document.querySelector("form");
   let pilotNameInput = document.querySelector("input[name='pilotName']");
   let copilotNameInput = document.querySelector("input[name='copilotName']");
   let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
   let cargoMassInput = document.querySelector("input[name='cargoMass']");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   form.addEventListener("submit", function(event){
        
       console.log("clicked submit");
       let validatedPilotEntry = validateInput(pilotNameInput.value);
       let validatedCopilotEntry = validateInput(copilotNameInput.value);
       let validatedFuelEntry = validateInput(fuelLevelInput.value);
       let validatedCargoMassEntry = validateInput(cargoMassInput.value);

       if (validatedPilotEntry === "Empty" || validatedCopilotEntry === "Empty" ||
       validatedFuelEntry === "Empty" || validatedCargoMassEntry === "Empty"){
         event.preventDefault();
       }
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });


   
});