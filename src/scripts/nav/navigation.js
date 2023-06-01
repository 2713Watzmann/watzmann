// for making navigation stick to the top of page
export const registerStickyNaviagtion = () => {
  var header = document.getElementsByTagName("header")[0];
  var sticky = header.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
};
