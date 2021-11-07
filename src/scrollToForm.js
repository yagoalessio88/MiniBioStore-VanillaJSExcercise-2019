const scrollLink = document.querySelector(".procesar");

scrollLink.addEventListener("click", (e) => {
  // prevent default
  e.preventDefault();
  const navbarHeight = document.querySelector(".navbar").clientHeight;
  const formSection = document.querySelector(".form-center");
  let position = formSection.offsetTop - navbarHeight;
  window.scrollTo({
    left: 0,
    // top: element.offsetTop,
    top: position,
    behavior: "smooth",
  });
});
