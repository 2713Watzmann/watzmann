const sky = document.getElementById("sky");
const mountain = document.getElementById("mountain");
const hills = document.getElementById("hills");
const trees = document.getElementById("trees");
const heroTitle = document.getElementById("hero_title");

// parallax scroll event
window.addEventListener("scroll", (e) => {
  const scrollValue = window.scrollY;

  sky.style.top = `${scrollValue * 0.8}px`;
  mountain.style.top = `${scrollValue * 0.4}px`;
  hills.style.top = `${scrollValue * 0.3}px`;
  trees.style.top = `${scrollValue * 0.1}px`;
  heroTitle.style.marginTop = `${scrollValue * 1}px`;
});

// navigation sticky
window.onscroll = function () {
  myFunction();
};

var header = document.getElementsByTagName("header")[0];
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
