import addProduct from "./addProduct.js";

const productos = [...document.querySelectorAll(".single-product")];
productos.forEach((producto) => {
  producto.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      const parent = e.currentTarget;
      const quantity = parent.querySelector("input").value;
      const id = e.currentTarget.dataset.id;
      addProduct(id, quantity);
    }
  });
});
