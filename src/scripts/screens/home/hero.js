// parallax scroll event for hero on landing page

const sky = document.getElementById("sky");
const mountain = document.getElementById("mountain");
const hills = document.getElementById("hills");
const trees = document.getElementById("trees");
const heroTitle = document.getElementById("hero_title");

export const registerParallaxScrollEvent = () => {
  window.addEventListener("scroll", (e) => {
    const scrollValue = window.scrollY;

    sky.style.top = `${scrollValue * 0.8}px`;
    mountain.style.top = `${scrollValue * 0.4}px`;
    hills.style.top = `${scrollValue * 0.3}px`;
    trees.style.top = `${scrollValue * 0.1}px`;
    heroTitle.style.marginTop = `${scrollValue * 1}px`;
  });
};

// this should be disabled when is not visible for memory optimization
