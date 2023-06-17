export const adjustMapSize = ({ isMobileView }) => {
  if (isMobileView()) {
    const mapFrame = document.querySelector("iframe");
    mapFrame.style.height = "400px";
  }
};
