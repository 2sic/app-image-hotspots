declare let Fancybox: any;

/** Loader function for our Fancybox */
export function activateFancybox({ groupId } : { groupId: string }) {
  Fancybox.bind(`[data-app-hotspot-fancybox="hotspots-${groupId}"]`, {
    groupAll: true,
    Thumbs: {
      autoStart: false
    },
    on: {  
      done: (fancybox: any, slide: any) => {
        const imgWidth = $(slide.src).find('img').width();
        if(!$(slide.src).find('.fancybox-copy').attr('style')) {
            $(slide.src).find('.fancybox-copy').css('max-width', imgWidth);
        }
        $(slide.src + ".fancybox-hotspot-content").css('opacity', 1)
      }
    }
  });
}