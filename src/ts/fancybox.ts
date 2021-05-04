/** Loader function for our Fancybox Gallery 3 */
export function activateFancybox() {
  /* Fancybox */
  if ($('.fancybox').fancybox) {
    $('.hotspots').find('[data-fancybox]').fancybox({
      loop: true,
      afterShow : function( instance: any, current: any ) {
          console.log(current.src);
          const imgWidth = $(current.src).find('img').width();
          if(!$(current.src).find('.fancybox-copy').attr('style')) {
              $(current.src).find('.fancybox-copy').css('max-width', imgWidth);
          }
          $(current.src + ".fancybox-hotspot-content").css('opacity', 1)
      }
    });
  } 
}