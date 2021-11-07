import get from "./getElement.js";
import addProduct from "./addProduct.js";

const addProductDrag = (id) => {
  const agregar = () => {
    const quantity = quantityLayer.querySelector(".quantity").value;
    addProduct(id, quantity);
    quantityLayer.classList.add("display-none");
    navBar.classList.remove("display-none");
    productsSection.classList.remove("display-none");
    btn.removeEventListener("click", agregar);
  };

  const productsSection = get(".products-section");
  console.log(productsSection);
  const quantityLayer = get(".product-quantity-desktop");
  const navBar = get(".navbar");
  quantityLayer.classList.remove("display-none");
  navBar.classList.add("display-none");
  //productsSection.classList.add("display-none");
  const btn = quantityLayer.querySelector(".quantity-layer-btn");
  btn.addEventListener("click", agregar);
};

export default addProductDrag;
