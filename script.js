const firstoptionEl = document.getElementById("first-option");
const secondoptionEl = document.getElementById("second-option");
const firstinputEl = document.getElementById("first-input");
const secondinputEl = document.getElementById("second-input");
const showRateEl = document.getElementById("show-rate");


firstinputEl.addEventListener("input", UPdaterate);
secondinputEl.addEventListener("input", UPdaterate);
firstoptionEl.addEventListener("change", UPdaterate);
secondoptionEl.addEventListener("change", UPdaterate);

UPdaterate();

function UPdaterate() {
    // insit fetch method is url and api exchangerate api websit
  fetch(
    `https://v6.exchangerate-api.com/v6/35c0065d004a28db7b466dad/latest/${firstoptionEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
        // conversion_rates is keyword for change rate
      const rate = data.conversion_rates[secondoptionEl.value];
      showRateEl.innerText = `1 ${firstoptionEl.value}=${
        rate.toFixed(3) + "" + secondoptionEl.value
      }`;
      secondinputEl.value = (firstinputEl.value * rate).toFixed(3);
    });
}
