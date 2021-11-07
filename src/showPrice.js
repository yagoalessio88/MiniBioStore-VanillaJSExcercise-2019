const showPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price / 100);
  return formattedPrice;
};

export default showPrice;
