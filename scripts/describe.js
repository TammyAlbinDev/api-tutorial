import pets from "../data.json";

console.log(pets[0]);

function sayLength(size) {
  console.log("This cat measures " + size + ".");
}

function describe(pet) {
  console.log(pet.name + " comes from " + pet.origin + ".");
}

sayLength("12 to 16 inches");

describe(pets[0]);