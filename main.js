const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};



ScrollReveal().reveal(".about-container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about-container .about-content", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".contributions-container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contributions-container .contributions-content", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".project-container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".card", {
  ...scrollRevealOption,
  interval: 500,
});

const maxCardHeight = Math.max(...Array.from(document.querySelectorAll('.card')).map(card => card.offsetHeight));

document.querySelectorAll('.card').forEach(card => {
  console.log(card.offsetHeight)
  card.style.height = `${maxCardHeight}px`;
});