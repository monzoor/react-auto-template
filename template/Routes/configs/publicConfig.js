import { PATHS } from "@constants/url";

import Home from "@containers/Home";
import Wow from "@containers/Wow";

const routes = [
  {
    path: PATHS.HOME,
    component: Home,
  },
  {
    path: PATHS.WOW,
    component: Wow,
  },
];

export default routes;
