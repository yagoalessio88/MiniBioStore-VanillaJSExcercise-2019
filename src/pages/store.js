// Global imports

// toggle button for navbar links -- MOBILE FUNCTIONALITY
import "../menuToggle.js";

// Store section imports
// smooth scroll to form section from button -- DESKTOP FUNCTIONALITY
import "../scrollToForm.js";
// managing form layers from checkbox -- DESKTOP FUNCTIONALITY
import "../formLayers.js";
// adding products to the shopping box by drag&drop -- DESKTOP FUNCIONALITY
import "../dragDrop.js";
// managing product description on hover -- DESKTOP FUNCTIONALITY
import "../describeProduct.js";
// adding products to the shopping box by button -- MOBILE FUNCTIONALITY
import "../addProductMobile.js";
// deleting products from the shopping box by button -- MOBILE/DESKTOP FUNCTIONALITY
import "../deleteProduct.js";

window.addEventListener("DOMContentLoaded", () => {
  const total = sessionStorage.getItem("total");
  if (total) {
    sessionStorage.removeItem("total");
  } else {
    return;
  }
});
