require('../scss/_Styles.scss');

const hotspotImages = document.querySelectorAll('.hotspots');

hotspotImages.forEach(el => el.addEventListener('click', event => {
  var bounds = (event.target as HTMLElement).getBoundingClientRect();
  var x = (event as MouseEvent).clientX - bounds.left;
  var y = (event as MouseEvent).clientY - bounds.top;
  var xPercent = x / bounds.width * 100;
  var yPercent = y / bounds.height * 100;
  console.log({xPercent: xPercent, yPercent: yPercent});
}));