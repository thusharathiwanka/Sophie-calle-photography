const nav = document.querySelector(".nav-links");
const menuIcon = document.querySelector("#menu");
const menuClose = document.querySelector("#menu-close");
const links = nav.querySelectorAll("a");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  menuClose.style.display = "none";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    menuClose.style.display = "none";
  });
});
