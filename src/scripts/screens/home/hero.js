// parallax scroll event for hero on landing page

export const registerParallaxScrollEvent = () => {
  const sky = document.getElementById("sky");
  const mountain = document.getElementById("mountain");
  const city = document.getElementById("city");
  const heroTitle = document.getElementById("hero_title");

  window.addEventListener("scroll", (e) => {
    const scrollValue = window.scrollY;

    sky.style.top = `${scrollValue * 0.8}px`;
    mountain.style.top = `${scrollValue * 0.4}px`;
    city.style.top = `${scrollValue * 0.3}px`;
    heroTitle.style.marginTop = `${scrollValue * 1}px`;
  });
};

// this should be disabled when is not visible for memory optimization
