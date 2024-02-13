const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

console.log(menuIcon);

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach((nav) => {
  console.log(nav);
  nav.addEventListener("click", () => {
    nav.classList.toggle("active");
    nav.classList.toggle("text-nav");
  });
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 200,
  delay: 200,
});

ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(
  ".home-content, .services-container, .portfolio-box .contact form",
  { origin: "bottom" }
);

// Window.onscroll = () => {
//   sections.forEach((sec) => {
//     const top = window.scrollY;
//     const offset = sec.offsetTop - 150;
//     const height = sec.offsetHeight;
//     const id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

const header = document.querySelector("header");

header.classList.toggle("sticky", window.scrolly > 100);

menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
