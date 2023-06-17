import * as home from "./scripts/screens/home/index.js";
import * as nav from "./scripts/nav/index.js";
import { isMobileView, adjustMapSize } from "./scripts/utils/index.js";

const app = () => {
  home.registerParallaxScrollEvent();
  nav.registerStickyNaviagtion();

  adjustMapSize({ isMobileView });
};

app();
