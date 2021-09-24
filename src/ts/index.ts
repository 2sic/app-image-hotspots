
require('../scss/_style.scss');

import { activateAdmin } from './admin';
import { activateFancybox } from './fancybox';

const winAny = (window as any);
winAny.appHotspot3 ??= {};
winAny.appHotspot3.activateAdmin ??= activateAdmin;
winAny.appHotspot3.activateFancybox ??= activateFancybox;