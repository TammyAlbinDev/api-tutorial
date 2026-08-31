
let button = document.getElementById("summarize-button");
let output = document.getElementById("output");

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + ".";
}

button.addEventListener("click", function () {
  output.textContent = summarize(pets[1]);
});


