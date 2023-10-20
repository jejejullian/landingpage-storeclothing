let header = document.querySelector(".header");
let navbar = document.querySelector(".header .nav");
let menu = document.querySelector(".menu");

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
    navbar.classList.add("active");
  } else {
    header.classList.remove("active");
    navbar.classList.remove("active");
  }
};

// scroll navbar end
