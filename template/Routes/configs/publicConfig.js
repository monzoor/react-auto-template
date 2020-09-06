import { PATHS } from '../../constants/url';

import Home from '../../Containers/Home';
import Wow from '../../Containers/Wow';

export default [
  {
    path: PATHS.HOME,
    component: Home,
  },
  {
    path: PATHS.WOW,
    component: Wow,
  },
];
