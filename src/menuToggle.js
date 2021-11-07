const navBar = document.querySelector(".navbar");
const menuLinks = document.querySelector(".nav-links");

navBar.addEventListener("click", (e) => {
  const element = e.target.parentElement;

  if (element.classList.contains("nav-open")) {
    menuLinks.classList.add("show-links");
  }
  if (element.classList.contains("nav-close")) {
    menuLinks.classList.remove("show-links");
  }
});
