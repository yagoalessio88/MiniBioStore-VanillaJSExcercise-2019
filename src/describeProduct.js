import get from "./getElement.js";
import productos from "./data.js";
import showPrice from "./showPrice.js";

// selecting elements
const productsImg = document.querySelectorAll(".capamover");
const descContainer = get(".product-description");
//adding event listeners for product:hover
productsImg.forEach((product) => {
  //show product info on product hover
  product.addEventListener("mouseover", (e) => {
    const id = e.currentTarget.parentElement.dataset.id;
    const product = productos[id];
    if (!product) return;
    const { nombre: name, precio: price, descripcion: desc } = product;
    descContainer.innerHTML = `<h3>${name}</h3>
            <p>${desc}</p>
            <p class="product-price">${showPrice(price)}</p>`;
  });
  //show default text on mouseout
  product.addEventListener("mouseout", () => {
    descContainer.innerHTML = `<p>
              <small
                >Posiciona el mouse sobre un producto para ver detalles</small> <br>
                <small>Arrastra el producto hacia la cesta para agregarlo a tu pedido!</small>
            </p>`;
  });
});
