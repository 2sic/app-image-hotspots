declare let $2sxc: any;

/** Loader function for our Hotspot Admin */
export function activateAdmin() {
  /* Hotspot */
  let hotSpotImage = document.querySelectorAll('.hotspots > img');

  hotSpotImage.forEach((hsElem: HTMLElement, index) => {
    if(!hsElem.classList.contains('added-listener')) {
      hsElem.addEventListener('click', () => {  

        if(!hsElem.classList.contains('hotspot3-image')) {
          return false;
        }

        const e = (event as MouseEvent);
        const moduleId = hsElem.parentElement.dataset.moduleId;
        const entityId = hsElem.parentElement.dataset.entityId
        const guid = hsElem.parentElement.dataset.guid
        const bounds = hsElem.getBoundingClientRect();
        const iconOffsetX = hsElem.parentElement.dataset.iconoffsetX;
        const iconOffsetY = hsElem.parentElement.dataset.iconoffsetY;
        const x = e.clientX - bounds.left - parseInt(iconOffsetX);
        const y = e.clientY - bounds.top - parseInt(iconOffsetY);
        const xPercent = x / bounds.width * 100;
        const yPercent = y / bounds.height * 100;
      
        $2sxc(moduleId).manage.run({
          'action': 'new',
          'sortOrder': 0,
          'isPublished': true,
          'entityId': entityId,
          'parent': guid,
          'fields': 'Hotspots',
          'prefill': {
            'X': Math.round(xPercent * 100) / 100,
            'Y': Math.round(yPercent * 100) / 100
          }
        });
      });

      hsElem.classList.add('added-listener');
    }
  })
}