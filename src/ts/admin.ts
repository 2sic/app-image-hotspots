import { CommandNames } from '@2sic.com/2sxc-typings';
// var $2sxc = require('../../node_modules/@2sic.com/2sxc-typings');

// declare let $2sxc: any;

/** Loader function for our Hotspot Admin */
export function activateAdmin() {
  // Hotspot image where marker should be added
  let hotSpotImage = document.querySelectorAll('.hotspot3-js-image');
  hotSpotImage.forEach((hsElem: HTMLElement, index) => {
    // add click listener only once
    if(!hsElem.classList.contains('added-listener')) {
      hsElem.addEventListener('click', () => {  
        debugger;
        // if clicked element is hotspot - do nothing
        if(hsElem.classList.contains('hotspot3-marker')) {
          return false;
        }

        // get all needed information to create new hotspot
        const e = (event as MouseEvent);
        const moduleId = parseInt(hsElem.parentElement.dataset.moduleId);
        const entityId = parseInt(hsElem.parentElement.dataset.entityId);
        const guid = hsElem.parentElement.dataset.guid;

        // get image dimensions
        const bounds = hsElem.getBoundingClientRect();

        // get hotspot icon offset
        const iconOffsetX = hsElem.parentElement.dataset.iconoffsetX;
        const iconOffsetY = hsElem.parentElement.dataset.iconoffsetY;

        // get exact position where hotspor marker shoul be added
        const x = e.clientX - bounds.left - parseInt(iconOffsetX);
        const y = e.clientY - bounds.top - parseInt(iconOffsetY);
        const xPercent = x / bounds.width * 100;
        const yPercent = y / bounds.height * 100;
        
        // open 2sxc mask with prefilled hotpot coordinates
        // window.$2sxc(moduleId).manage.run({
        window.$2sxc(moduleId).cms.run({
          action: CommandNames.new,
          //params: {
            // index: 0,
            // isPublished: true,
            entityId: entityId,
            parent: guid,
            fields: 'Hotspots',
            prefill: {
              X: Math.round(xPercent * 100) / 100,
              Y: Math.round(yPercent * 100) / 100
            }
          //}
        } as any);
      });

      // added so click listener is only added once
      hsElem.classList.add('added-listener');
    }
  })
}