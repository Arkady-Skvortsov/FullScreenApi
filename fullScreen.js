// window.addEventListener('load', () => {
//    console.log("Thanks))", window.innerWidth);
// });

let artBlock = document.querySelector('.art-block');

artBlock.addEventListener('click', () => {
    if(!document.fullscreenElement) {
    	artBlock.requestFullscreen();
    } else {
    	if(document.fullscreenEnabled) {
           document.exitFullscreen();
    	}
    }
});

window.addEventListener('fullscreenchange', () => {
    if(document.fullscreenElement) console.log("FullScreen");
    
});

