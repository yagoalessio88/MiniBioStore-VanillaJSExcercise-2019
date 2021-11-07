const delivery = document.querySelector(".delivery");
const pickup = document.querySelector(".pickup");
const checkDesplega1 = document.getElementById("c1");
const checkDesplega2 = document.getElementById("c2");

checkDesplega1.addEventListener("change", () => {
  delivery.classList.add("show-delivery");
  pickup.classList.remove("show-pickup");
});
checkDesplega2.addEventListener("change", () => {
  delivery.classList.remove("show-delivery");
  pickup.classList.add("show-pickup");
});
