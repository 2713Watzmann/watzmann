// for making navigation stick to the top of page
export const registerStickyNaviagtion = () => {
  const header = document.getElementsByTagName("header")[0];
  let sticky = header.offsetTop;
  const main = document.querySelector("main");

  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      main.style.padding = "126px 0px 0px 0px";
    } else {
      header.classList.remove("sticky");
      main.style.padding = "0px 0px 0px 0px";
    }
  };
};

// extend this so mobile would pick up the nav bar properly
