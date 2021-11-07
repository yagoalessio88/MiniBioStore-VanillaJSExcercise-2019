import get from "./getElement.js";
import showTotal from "./showTotal.js";
import productos from "./data.js";

// selecting elements
const itemsContainer = get(".items-container");
// event listener for delete btn
itemsContainer.addEventListener("click", (e) => {
  const btn = e.target.parentElement;
  const id = btn.parentElement.parentElement.dataset.id;
  const total = btn.parentElement.parentElement.dataset.total;
  const item = btn.parentElement.parentElement;
  const product = productos[id];

  if (btn.classList.contains("delete")) {
    itemsContainer.removeChild(item);
    showTotal(total, "subtract");
  }
});
