declare let $2sxc: any;

require('../scss/_Styles.scss');

const hotspotImages = document.querySelectorAll('.hotspots');

hotspotImages.forEach(el => el.addEventListener('click', event => {
  const target = (event.target as HTMLElement);
  if(!target.classList.contains('hotspot-image')) {
    return false;
  }

  const e = (event as MouseEvent);
  const moduleId = target.parentElement.dataset.moduleId;
  const entityId = target.parentElement.dataset.entityId
  const guid = target.parentElement.dataset.guid
  const bounds = target.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
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
      'X': xPercent,
      'Y': yPercent
    }
  });
}));