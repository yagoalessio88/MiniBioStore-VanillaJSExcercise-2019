import get from "./getElement.js";
import showPrice from "./showPrice.js";

const showTotal = (number, operation) => {
  const totalContainer = get(".total");
  totalContainer.innerHTML = `<h4 class="total">Total:0,00&euro;</h4>`;
  let total = parseInt(sessionStorage.getItem("total"));
  if (!total) {
    total = 0;
  }
  if (operation === "add") {
    total += number;
  }
  if (operation == "subtract") {
    total -= number;
  }
  sessionStorage.setItem("total", total);
  totalContainer.innerHTML = `<h4 class="total">Total:${showPrice(total)}</h4>`;
};

export default showTotal;

// chequear la operacion (suma/resta)
//chequear total de compra en local storage
// sumar/restar importe con total
// actualizar total en local storage
// format price
// show total in total container y product container
