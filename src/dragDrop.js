import addProductDrag from "./addProductDrag.js";

/////drag and drop elements

//Definimos elementos de tipo Draggable (productos)

new Draggable("capa0", { revert: true });
new Draggable("capa1", { revert: true });
new Draggable("capa2", { revert: true });
new Draggable("capa3", { revert: true });
new Draggable("capa4", { revert: true });
new Draggable("capa5", { revert: true });

//Definimos capa receptora (cesta de compra)
Droppables.add("receptor", {
  accept: "capamover",
  hoverclass: "cesta1",
  onDrop: function (elemento) {
    //al hacer drop de un producto sobre la cesta llamamos
    //a la función que agregará la información de dicho
    //producto a nuestra lista de compra
    const id = elemento.parentElement.dataset.id;
    addProductDrag(id);
  },
});
