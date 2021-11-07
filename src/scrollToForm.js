const scrollLink = document.querySelector(".procesar");

scrollLink.addEventListener("click", (e) => {
  // prevent default
  e.preventDefault();
  const formSection = document.querySelector(".form-center");
  let position = formSection.offsetTop - 48;
  window.scrollTo({
    left: 0,
    // top: element.offsetTop,
    top: position,
    behavior: "smooth",
  });
});
