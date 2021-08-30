
require('../scss/_Styles.scss');

import { activateAdmin } from './admin';
import { activateFancybox } from './fancybox';

const winAny = (window as any);
winAny.appHotspot = winAny.appHotspot || {};
winAny.appHotspot.activateAdmin = winAny.appHotspot.activateAdmin || activateAdmin;
winAny.appHotspot.activateFancybox = winAny.appHotspot.activateFancybox || activateFancybox




