let pet = {
  name: "Abyssinian",
  origin: "Ethiopia"
};

let secondPet = {
  name: "Siamese",
  origin: "Thailand"
};

function describe(pet) {
  return pet.name + " comes from " + pet.origin + ".";
}

let button = document.getElementById("describe-button");
let output = document.getElementById("output");
let secondButton = document.getElementById("describe-second-button");

button.addEventListener("click", function () {
  output.textContent = describe(pet);
});

secondButton.addEventListener("click", function () {
  output.textContent = describe(secondPet);
});