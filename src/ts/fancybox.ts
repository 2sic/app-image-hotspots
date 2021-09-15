declare let Fancybox: any;

/** Loader function for our Fancybox */
export function activateFancybox({ groupId } : { groupId: string }) {
  Fancybox.bind(`[data-app-hotspot-fancybox="${groupId}"]`, {
    groupAll: true,
    Thumbs: {
      autoStart: false
    },
    on: {  
      done: (fancybox: any, slide: any) => {
        const imgWidth = document.querySelector(`${slide.src} img`).getBoundingClientRect().width
        let fancyboxText: HTMLElement = document.querySelector(`${slide.src} .fancybox-text`)
        let hotspotContent: HTMLElement = document.querySelector(`${slide.src}.fancybox-hotspot-content`)
        if(!fancyboxText.hasAttribute('style')) fancyboxText.style.maxWidth = `${Math.floor(imgWidth)}px`
        hotspotContent.style.opacity = "1"
      }
    }
  });
}