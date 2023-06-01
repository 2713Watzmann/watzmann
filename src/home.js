import * as home from "./scripts/screens/home/index.js";
import * as nav from "./scripts/nav/index.js";

const app = () => {
  home.registerParallaxScrollEvent();
  nav.registerStickyNaviagtion();
};

app();
