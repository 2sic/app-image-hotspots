
require('../scss/_Styles.scss');

import { activateFancybox } from './fancybox';
import { activateAdmin } from './admin';

/** activate all the hotspot features */
function activateHotspotAll() {
  activateFancybox();
  activateAdmin();
}

// Add window.appHotspot.activateAll() 
// so it can be called from the HTML when content re-initializes dynamically
const win2GalExt = (window as any);
const appH = win2GalExt.appHotspot = win2GalExt.appHotspot || {};
appH.activateHotspotAll = appH.activateHotspotAll || activateHotspotAll;

// If loaded the first time on a dynamic page, activate automatically
// Later reloads will need to call the activateAll from the reloaded content
$(activateHotspotAll);




