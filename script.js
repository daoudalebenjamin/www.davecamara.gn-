const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

});


document.querySelectorAll("#menu a").forEach(link => {

  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });

});


/* ANIMATION AU DÉFILEMENT */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


/* RETOUR EN HAUT */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 600) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});


topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ANNÉE AUTOMATIQUE */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* MODE SOMBRE / CLAIR */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

});


/* EFFET SOURIS */

document.addEventListener("mousemove", event => {

  const x = event.clientX;
  const y = event.clientY;

  document.body.style.setProperty("--mouse-x", `${x}px`);
  document.body.style.setProperty("--mouse-y", `${y}px`);

});
