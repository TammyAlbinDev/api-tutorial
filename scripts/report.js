
import pets from "../data.json";

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

let lines = pets.map(summarize);
let report = lines.join("\n");

let totalWeight = pets.reduce(function(total, pet) {
  return total + pet.max_weight;
}, 0);

console.log(report);
console.log("Total weight: " + totalWeight + " pounds.");

