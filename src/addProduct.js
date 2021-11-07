import get from "./getElement.js";
import showPrice from "./showPrice.js";
import productos from "./data.js";
import showTotal from "./showTotal.js";

const addProduct = (id, quantity) => {
  const itemsContainer = get(".items-container");
  const product = productos[id];
  const { id: ID, nombre: name, precio: price } = product;
  let total = price * quantity;
  itemsContainer.innerHTML += `<article class="single-item" data-id="${ID}" data-total="${Math.ceil(
    total
  )}">
              <div class="item-info">
                <h4>${name}</h4>
                <p>X ${quantity}Kg - ${showPrice(total)}</p>
              </div>
              <div>
                <a class="item-link delete"><i class="far fa-trash-alt"></i></a>
              </div>
            </article>`;
  showTotal(Math.ceil(total), "add");
};

export default addProduct;
